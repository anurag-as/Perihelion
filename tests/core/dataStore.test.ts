import { describe, it, expect, beforeEach } from "vitest";
import * as fc from "fast-check";
import { createDataStore } from "../../src/core/dataStore";
import type { NeoData } from "../../src/core/types";

function makeNeo(overrides: Partial<NeoData> = {}): NeoData {
  return {
    id: "test-id",
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

describe("DataStore", () => {
  let store: ReturnType<typeof createDataStore>;

  beforeEach(() => {
    store = createDataStore();
  });

  it("set and get round-trip returns the stored object", () => {
    const neo = makeNeo({ name: "Apophis" });
    store.set(1n, neo);
    expect(store.get(1n)).toBe(neo);
  });

  it("get with unknown id returns undefined", () => {
    expect(store.get(999n)).toBeUndefined();
  });

  it("size reflects number of stored entries", () => {
    expect(store.size()).toBe(0);
    store.set(1n, makeNeo());
    expect(store.size()).toBe(1);
    store.set(2n, makeNeo());
    expect(store.size()).toBe(2);
  });

  it("clear removes all entries and size returns 0", () => {
    store.set(1n, makeNeo());
    store.set(2n, makeNeo());
    store.clear();
    expect(store.size()).toBe(0);
    expect(store.get(1n)).toBeUndefined();
  });

  it("getAll returns all stored NeoData objects", () => {
    const a = makeNeo({ name: "A" });
    const b = makeNeo({ name: "B" });
    store.set(1n, a);
    store.set(2n, b);
    const all = store.getAll();
    expect(all).toHaveLength(2);
    expect(all).toContain(a);
    expect(all).toContain(b);
  });

  it("lookup returns only objects whose ids are in the array", () => {
    const a = makeNeo({ name: "A" });
    const b = makeNeo({ name: "B" });
    const c = makeNeo({ name: "C" });
    store.set(1n, a);
    store.set(2n, b);
    store.set(3n, c);
    const result = store.lookup(new BigInt64Array([1n, 3n]));
    expect(result).toHaveLength(2);
    expect(result).toContain(a);
    expect(result).toContain(c);
    expect(result).not.toContain(b);
  });

  it("lookup with unknown ids skips them silently", () => {
    store.set(1n, makeNeo());
    const result = store.lookup(new BigInt64Array([1n, 999n]));
    expect(result).toHaveLength(1);
  });

  it("lookup with empty array returns empty array", () => {
    store.set(1n, makeNeo());
    expect(store.lookup(new BigInt64Array([]))).toEqual([]);
  });

  it("set overwrites existing entry for the same id", () => {
    const first = makeNeo({ name: "First" });
    const second = makeNeo({ name: "Second" });
    store.set(1n, first);
    store.set(1n, second);
    expect(store.get(1n)).toBe(second);
    expect(store.size()).toBe(1);
  });

  describe("property-based tests", () => {
    it("set/get round-trip holds for any bigint key", () => {
      fc.assert(
        fc.property(fc.bigInt(), (id) => {
          const s = createDataStore();
          const neo = makeNeo({ name: String(id) });
          s.set(id, neo);
          return s.get(id) === neo;
        }),
      );
    });

    it("get with unknown id always returns undefined", () => {
      fc.assert(
        fc.property(fc.bigInt(), fc.bigInt(), (storedId, queryId) => {
          fc.pre(storedId !== queryId);
          const s = createDataStore();
          s.set(storedId, makeNeo());
          return s.get(queryId) === undefined;
        }),
      );
    });

    it("lookup returns exactly the objects present in the store", () => {
      fc.assert(
        fc.property(
          fc.uniqueArray(fc.bigInt({ min: 0n, max: 1000n }), {
            minLength: 1,
            maxLength: 20,
          }),
          fc.uniqueArray(fc.bigInt({ min: 0n, max: 1000n }), {
            minLength: 1,
            maxLength: 10,
          }),
          (storedIds, queryIds) => {
            const s = createDataStore();
            const neoMap = new Map<bigint, NeoData>();
            for (const id of storedIds) {
              const neo = makeNeo({ name: String(id) });
              s.set(id, neo);
              neoMap.set(id, neo);
            }

            const results = s.lookup(new BigInt64Array(queryIds));
            const storedSet = new Set(storedIds);
            const expected = queryIds
              .filter((id) => storedSet.has(id))
              .map((id) => neoMap.get(id)!);

            return (
              results.length === expected.length &&
              expected.every((neo) => results.includes(neo))
            );
          },
        ),
      );
    });

    it("clear makes size() return 0", () => {
      fc.assert(
        fc.property(
          fc.array(fc.bigInt({ min: 0n, max: 1000n }), {
            minLength: 0,
            maxLength: 50,
          }),
          (ids) => {
            const s = createDataStore();
            for (const id of ids) s.set(id, makeNeo());
            s.clear();
            return s.size() === 0;
          },
        ),
      );
    });

    it("getAll returns all stored objects", () => {
      fc.assert(
        fc.property(
          fc.uniqueArray(fc.bigInt({ min: 0n, max: 1000n }), {
            minLength: 0,
            maxLength: 50,
          }),
          (ids) => {
            const s = createDataStore();
            const inserted: NeoData[] = [];
            for (const id of ids) {
              const neo = makeNeo({ name: String(id) });
              s.set(id, neo);
              inserted.push(neo);
            }
            const all = s.getAll();
            return (
              all.length === inserted.length &&
              inserted.every((neo) => all.includes(neo))
            );
          },
        ),
      );
    });
  });
});
