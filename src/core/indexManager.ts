import type { NeoData, BonsaiStats } from "./types";
import { createDataStore, type DataStore } from "./dataStore";

let wasmInitFn: (() => Promise<unknown>) | null = null;
let WasmBonsaiIndexCtor: (new () => WasmIndex) | null = null;

interface WasmIndex {
  insert(x: number, y: number, payload: number): number;
  range_query(
    minX: number,
    minY: number,
    maxX: number,
    maxY: number,
  ): Float64Array;
  knn_query(x: number, y: number, k: number): Float64Array;
  stats(): Float64Array;
  clear(): void;
  len(): number;
  is_empty(): boolean;
  free(): void;
}

function dist3d(
  a: [number, number, number],
  b: [number, number, number],
): number {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  const dz = a[2] - b[2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function parseStats(raw: Float64Array): BonsaiStats {
  return {
    point_count: raw[0],
    query_count: raw[1],
    migration_count: raw[2],
    migrating: raw[3] !== 0,
    backend_kind: raw[4],
  };
}

export class IndexManager {
  private index: WasmIndex | null = null;
  private store: DataStore = createDataStore();
  private payloadMap: NeoData[] = [];
  private ready = false;

  async init(): Promise<void> {
    if (this.ready) return;
    if (!wasmInitFn) {
      const mod = await import("../wasm/pkg/perihelion_wasm.js");
      wasmInitFn = mod.default as () => Promise<unknown>;
      WasmBonsaiIndexCtor = mod.WasmBonsaiIndex as new () => WasmIndex;
    }
    await wasmInitFn();
    // Single instance for the lifetime of the manager; rebuild() resets via clear().
    this.index = new WasmBonsaiIndexCtor!();
    this.ready = true;
  }

  isReady(): boolean {
    return this.ready;
  }

  insertAll(objects: NeoData[]): void {
    if (!this.index)
      throw new Error("IndexManager not initialised — call init() first");
    for (const obj of objects) {
      const payload = this.payloadMap.length;
      const id = BigInt(
        Math.round(
          this.index.insert(obj.position3d[0], obj.position3d[2], payload),
        ),
      );
      const neo = { ...obj, bonsaiId: id };
      this.payloadMap.push(neo);
      this.store.set(id, neo);
    }
  }

  // clear() resets the index in-place — avoids calling new() again.
  rebuild(objects: NeoData[]): void {
    if (!this.index)
      throw new Error("IndexManager not initialised — call init() first");
    this.index.clear();
    this.store = createDataStore();
    this.payloadMap = [];
    for (const obj of objects) {
      const payload = this.payloadMap.length;
      const id = BigInt(
        Math.round(
          this.index.insert(obj.position3d[0], obj.position3d[2], payload),
        ),
      );
      const neo = { ...obj, bonsaiId: id };
      this.payloadMap.push(neo);
      this.store.set(id, neo);
    }
  }

  // AABB over-approximation on XZ (ecliptic plane), then 3D sphere refinement.
  rangeQuery(centre: [number, number, number], radiusAU: number): NeoData[] {
    if (!this.index) return [];
    const [cx, , cz] = centre;
    const raw = this.index.range_query(
      cx - radiusAU,
      cz - radiusAU,
      cx + radiusAU,
      cz + radiusAU,
    );
    const results: NeoData[] = [];
    for (let i = 0; i < raw.length; i += 2) {
      const neo = this.payloadMap[Math.round(raw[i + 1])];
      if (neo && dist3d(neo.position3d, centre) <= radiusAU) results.push(neo);
    }
    return results;
  }

  // WASM index is 2D (XZ); re-sort by true 3D distance after resolution.
  knnQuery(point: [number, number, number], k: number): NeoData[] {
    if (!this.index) return [];
    const raw = this.index.knn_query(point[0], point[2], k);
    const results: NeoData[] = [];
    for (let i = 0; i < raw.length; i += 3) {
      const neo = this.payloadMap[Math.round(raw[i + 2])];
      if (neo) results.push(neo);
    }
    return results.sort(
      (a, b) => dist3d(a.position3d, point) - dist3d(b.position3d, point),
    );
  }

  stats(): BonsaiStats {
    if (!this.index) {
      return {
        point_count: 0,
        query_count: 0,
        migration_count: 0,
        migrating: false,
        backend_kind: 0,
      };
    }
    return parseStats(this.index.stats());
  }

  getStore(): DataStore {
    return this.store;
  }
}
