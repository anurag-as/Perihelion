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
  // Sequential u32 payload → NeoData (parallel array for O(1) lookup)
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
    this.index = new WasmBonsaiIndexCtor!();
    this.ready = true;
  }

  isReady(): boolean {
    return this.ready;
  }

  // Insert all objects into the current index without clearing first.
  insertAll(objects: NeoData[]): void {
    if (!this.index || !WasmBonsaiIndexCtor) {
      throw new Error("IndexManager not initialised — call init() first");
    }

    for (const obj of objects) {
      const payload = this.payloadMap.length;
      const entryIdF64 = this.index.insert(
        obj.position3d[0],
        obj.position3d[1],
        payload,
      );
      const bonsaiId = BigInt(Math.round(entryIdF64));
      const neo = { ...obj, bonsaiId };
      this.payloadMap.push(neo);
      this.store.set(bonsaiId, neo);
    }
  }

  // Atomically replace the index and store with a fresh build from objects.
  // Builds the new index first, then swaps — no queries see a partial state.
  rebuild(objects: NeoData[]): void {
    if (!this.ready || !WasmBonsaiIndexCtor) {
      throw new Error("IndexManager not initialised — call init() first");
    }

    const newIndex = new WasmBonsaiIndexCtor();
    const newStore = createDataStore();
    const newPayloadMap: NeoData[] = [];

    for (const obj of objects) {
      const payload = newPayloadMap.length;
      const entryIdF64 = newIndex.insert(
        obj.position3d[0],
        obj.position3d[1],
        payload,
      );
      const bonsaiId = BigInt(Math.round(entryIdF64));
      const neo = { ...obj, bonsaiId };
      newPayloadMap.push(neo);
      newStore.set(bonsaiId, neo);
    }

    // Atomic swap — free old WASM memory
    this.index?.free();
    this.index = newIndex;
    this.store = newStore;
    this.payloadMap = newPayloadMap;
  }

  // Range query: AABB over-approximation on XY, then 3D sphere refinement.
  rangeQuery(centre: [number, number, number], radiusAU: number): NeoData[] {
    if (!this.index) return [];

    const [cx, cy] = centre;
    const raw = this.index.range_query(
      cx - radiusAU,
      cy - radiusAU,
      cx + radiusAU,
      cy + radiusAU,
    );

    const results: NeoData[] = [];
    // WASM layout: [entry_id, payload, entry_id, payload, ...]
    for (let i = 0; i < raw.length; i += 2) {
      const payload = Math.round(raw[i + 1]);
      const neo = this.payloadMap[payload];
      if (neo && dist3d(neo.position3d, centre) <= radiusAU) {
        results.push(neo);
      }
    }
    return results;
  }

  // kNN query: delegates to WASM, resolves NeoData, returns ordered by distance.
  // Note: WASM index is 2D (XY only); Z is ignored for neighbour ranking.
  // Results are re-sorted by true 3D distance after resolution.
  knnQuery(point: [number, number, number], k: number): NeoData[] {
    if (!this.index) return [];

    const raw = this.index.knn_query(point[0], point[1], k);
    const results: NeoData[] = [];
    // WASM layout: [distance, entry_id, payload, distance, entry_id, payload, ...]
    for (let i = 0; i < raw.length; i += 3) {
      const payload = Math.round(raw[i + 2]);
      const neo = this.payloadMap[payload];
      if (neo) results.push(neo);
    }
    // Re-sort by true 3D distance to correct for Z being ignored in the WASM index.
    results.sort(
      (a, b) => dist3d(a.position3d, point) - dist3d(b.position3d, point),
    );
    return results;
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
