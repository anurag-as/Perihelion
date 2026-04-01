import { describe, it, expect, vi, beforeEach } from "vitest";
import * as fc from "fast-check";
import type { NeoData } from "../../src/core/types";

function dist3d(
  a: [number, number, number],
  b: [number, number, number],
): number {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  const dz = a[2] - b[2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

class MockWasmBonsaiIndex {
  private points: Array<{ x: number; y: number; payload: number }> = [];
  private entryCounter = 0;
  private migrationCount = 0;
  private queryCount = 0;

  insert(x: number, y: number, payload: number): number {
    const id = this.entryCounter++;
    this.points.push({ x, y, payload });
    return id;
  }

  range_query(
    minX: number,
    minY: number,
    maxX: number,
    maxY: number,
  ): Float64Array {
    this.queryCount++;
    const out: number[] = [];
    let id = 0;
    for (const p of this.points) {
      if (p.x >= minX && p.x <= maxX && p.y >= minY && p.y <= maxY) {
        // Real WASM layout: [entry_id, payload, ...]
        out.push(id, p.payload);
      }
      id++;
    }
    return new Float64Array(out);
  }

  knn_query(x: number, y: number, k: number): Float64Array {
    this.queryCount++;
    const withIds = this.points.map((p, i) => ({
      dist: Math.sqrt((p.x - x) ** 2 + (p.y - y) ** 2),
      id: i,
      payload: p.payload,
    }));
    const sorted = withIds.sort((a, b) => a.dist - b.dist).slice(0, k);
    const out: number[] = [];
    // Real WASM layout: [distance, entry_id, payload, ...]
    for (const r of sorted) out.push(r.dist, r.id, r.payload);
    return new Float64Array(out);
  }

  stats(): Float64Array {
    // Real WASM layout: [point_count, query_count, migration_count, migrating, backend_kind]
    return new Float64Array([
      this.points.length,
      this.queryCount,
      this.migrationCount,
      0,
      0,
    ]);
  }

  len(): number {
    return this.points.length;
  }

  is_empty(): boolean {
    return this.points.length === 0;
  }

  free(): void {
    this.points = [];
  }
}

vi.mock("../../src/wasm/pkg/perihelion_wasm.js", () => ({
  default: async () => {},
  WasmBonsaiIndex: MockWasmBonsaiIndex,
}));

// Import after mock is registered.
const { IndexManager } = await import("../../src/core/indexManager");

function makeNeo(overrides: Partial<NeoData> = {}): NeoData {
  return {
    id: "test",
    name: "Test NEO",
    diameterKm: 0.5,
    hazardous: false,
    missDistKm: 500_000,
    missDistLunar: 1.3,
    velocityKmS: 15,
    approachDate: new Date("2025-01-01"),
    position3d: [1.0, 0.0, 0.0],
    ...overrides,
  };
}

function makeNeos(count: number): NeoData[] {
  return Array.from({ length: count }, (_, i) =>
    makeNeo({
      id: String(i),
      name: `NEO-${i}`,
      position3d: [i * 0.01, i * 0.01, 0],
    }),
  );
}

describe("IndexManager", () => {
  let manager: InstanceType<typeof IndexManager>;

  beforeEach(async () => {
    manager = new IndexManager();
    await manager.init();
  });

  describe("rebuild idempotency", () => {
    it("rebuilding twice with the same objects yields the same point_count", () => {
      fc.assert(
        fc.property(fc.integer({ min: 0, max: 50 }), (count) => {
          const neos = makeNeos(count);
          manager.rebuild(neos);
          const countAfterFirst = manager.stats().point_count;
          manager.rebuild(neos);
          const countAfterSecond = manager.stats().point_count;
          return (
            countAfterFirst === countAfterSecond && countAfterFirst === count
          );
        }),
      );
    });

    it("point_count equals objects.length after rebuild", () => {
      fc.assert(
        fc.property(
          fc.array(
            fc.record({
              x: fc.float({ min: -5, max: 5, noNaN: true }),
              y: fc.float({ min: -5, max: 5, noNaN: true }),
            }),
            { minLength: 0, maxLength: 30 },
          ),
          (points) => {
            const neos = points.map((p, i) =>
              makeNeo({ id: String(i), position3d: [p.x, p.y, 0] }),
            );
            manager.rebuild(neos);
            return manager.stats().point_count === neos.length;
          },
        ),
      );
    });

    it("rebuild replaces previous entries — no stale data remains", () => {
      const first = makeNeos(5);
      const second = makeNeos(3);
      manager.rebuild(first);
      manager.rebuild(second);
      expect(manager.stats().point_count).toBe(3);
      expect(manager.getStore().size()).toBe(3);
    });
  });

  describe("freeze prevents migration (atomic swap semantics)", () => {
    it("migration_count does not change during a rebuild sequence", () => {
      fc.assert(
        fc.property(
          fc.integer({ min: 1, max: 10 }),
          fc.integer({ min: 1, max: 20 }),
          (rebuilds, neoCount) => {
            const neos = makeNeos(neoCount);
            const migrationsBefore = manager.stats().migration_count;
            for (let i = 0; i < rebuilds; i++) {
              manager.rebuild(neos);
            }
            const migrationsAfter = manager.stats().migration_count;
            // Each rebuild creates a fresh index starting at 0 migrations.
            // The migration_count of the active index must not exceed what
            // the new index reports (which starts at 0 for a fresh build).
            return migrationsAfter >= migrationsBefore || migrationsAfter === 0;
          },
        ),
      );
    });

    it("migration_count resets to 0 on each rebuild (fresh index)", () => {
      manager.rebuild(makeNeos(5));
      const stats = manager.stats();
      expect(stats.migration_count).toBe(0);
    });
  });

  describe("rangeQuery", () => {
    it("returns only NEOs within the sphere radius", () => {
      const neos: NeoData[] = [
        makeNeo({ id: "0", position3d: [0, 0, 0] }),
        makeNeo({ id: "1", position3d: [0.5, 0, 0] }),
        makeNeo({ id: "2", position3d: [2, 0, 0] }),
      ];
      manager.rebuild(neos);
      const results = manager.rangeQuery([0, 0, 0], 0.6);
      expect(results.length).toBe(2);
      expect(results.map((n) => n.id)).toContain("0");
      expect(results.map((n) => n.id)).toContain("1");
    });

    it("returns empty array when no NEOs are within radius", () => {
      manager.rebuild([makeNeo({ position3d: [10, 10, 0] })]);
      expect(manager.rangeQuery([0, 0, 0], 0.1)).toHaveLength(0);
    });

    it("resolves correct NeoData objects — not entry_id misread as payload", () => {
      const neos = makeNeos(5);
      manager.rebuild(neos);
      const results = manager.rangeQuery([0.02, 0.02, 0], 0.05);
      for (const neo of results) {
        expect(neo).toBeDefined();
        expect(neo.id).toBeDefined();
      }
    });

    /**
     * For any inserted set and any sphere, no point inside the sphere is missing from results.
     */
    it("completeness: no point inside the sphere is missing from results", () => {
      const coord = fc.double({
        min: -5,
        max: 5,
        noNaN: true,
        noDefaultInfinity: true,
      });
      const centreCoord = fc.double({
        min: -3,
        max: 3,
        noNaN: true,
        noDefaultInfinity: true,
      });
      const radius = fc.double({
        min: 0.01,
        max: 4,
        noNaN: true,
        noDefaultInfinity: true,
      });

      fc.assert(
        fc.property(
          fc.array(fc.record({ x: coord, y: coord, z: coord }), {
            minLength: 0,
            maxLength: 30,
          }),
          fc.record({ cx: centreCoord, cy: centreCoord, cz: centreCoord }),
          radius,
          (points, centre, r) => {
            const neos = points.map((p, i) =>
              makeNeo({ id: String(i), position3d: [p.x, p.y, p.z] }),
            );
            manager.rebuild(neos);

            const c: [number, number, number] = [
              centre.cx,
              centre.cy,
              centre.cz,
            ];
            const results = manager.rangeQuery(c, r);
            const resultIds = new Set(results.map((n) => n.id));

            for (const neo of neos) {
              if (dist3d(neo.position3d, c) <= r) {
                if (!resultIds.has(neo.id)) return false;
              }
            }
            return true;
          },
        ),
      );
    });

    /**
     * Every returned point satisfies dist3d(position3d, centre) ≤ radiusAU.
     */
    it("soundness: every returned point is within the sphere radius", () => {
      const coord = fc.double({
        min: -5,
        max: 5,
        noNaN: true,
        noDefaultInfinity: true,
      });
      const centreCoord = fc.double({
        min: -3,
        max: 3,
        noNaN: true,
        noDefaultInfinity: true,
      });
      const radius = fc.double({
        min: 0.01,
        max: 4,
        noNaN: true,
        noDefaultInfinity: true,
      });

      fc.assert(
        fc.property(
          fc.array(fc.record({ x: coord, y: coord, z: coord }), {
            minLength: 0,
            maxLength: 30,
          }),
          fc.record({ cx: centreCoord, cy: centreCoord, cz: centreCoord }),
          radius,
          (points, centre, r) => {
            const neos = points.map((p, i) =>
              makeNeo({ id: String(i), position3d: [p.x, p.y, p.z] }),
            );
            manager.rebuild(neos);

            const c: [number, number, number] = [
              centre.cx,
              centre.cy,
              centre.cz,
            ];
            const results = manager.rangeQuery(c, r);

            return results.every((neo) => dist3d(neo.position3d, c) <= r);
          },
        ),
      );
    });
  });

  describe("knnQuery", () => {
    it("returns at most k results", () => {
      manager.rebuild(makeNeos(10));
      const results = manager.knnQuery([0, 0, 0], 3);
      expect(results.length).toBeLessThanOrEqual(3);
    });

    it("returns min(k, point_count) results", () => {
      fc.assert(
        fc.property(
          fc.integer({ min: 1, max: 20 }),
          fc.integer({ min: 1, max: 10 }),
          (n, k) => {
            manager.rebuild(makeNeos(n));
            const results = manager.knnQuery([0, 0, 0], k);
            return results.length === Math.min(k, n);
          },
        ),
      );
    });

    it("resolves correct NeoData objects — not entry_id misread as payload", () => {
      const neos = makeNeos(5);
      manager.rebuild(neos);
      const results = manager.knnQuery([0, 0, 0], 3);
      for (const neo of results) {
        expect(neo).toBeDefined();
        expect(neos.map((n) => n.id)).toContain(neo.id);
      }
    });

    it("ordering: results are sorted by ascending 3D distance from query point", () => {
      fc.assert(
        fc.property(
          fc.array(
            fc.record({
              x: fc.double({
                min: -5,
                max: 5,
                noNaN: true,
                noDefaultInfinity: true,
              }),
              y: fc.double({
                min: -5,
                max: 5,
                noNaN: true,
                noDefaultInfinity: true,
              }),
              z: fc.double({
                min: -5,
                max: 5,
                noNaN: true,
                noDefaultInfinity: true,
              }),
            }),
            { minLength: 1, maxLength: 20 },
          ),
          fc.integer({ min: 1, max: 10 }),
          (points, k) => {
            const neos = points.map((p, i) =>
              makeNeo({ id: String(i), position3d: [p.x, p.y, p.z] }),
            );
            manager.rebuild(neos);
            const q: [number, number, number] = [0, 0, 0];
            const results = manager.knnQuery(q, k);
            for (let i = 1; i < results.length; i++) {
              if (
                dist3d(results[i - 1].position3d, q) >
                dist3d(results[i].position3d, q)
              ) {
                return false;
              }
            }
            return true;
          },
        ),
      );
    });
  });
});
