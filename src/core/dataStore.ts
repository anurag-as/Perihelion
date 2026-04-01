import type { NeoData } from "./types";

export interface DataStore {
  set(id: bigint, neo: NeoData): void;
  get(id: bigint): NeoData | undefined;
  lookup(ids: BigInt64Array): NeoData[];
  clear(): void;
  getAll(): NeoData[];
  size(): number;
}

export function createDataStore(): DataStore {
  const store = new Map<bigint, NeoData>();

  return {
    set(id, neo) {
      store.set(id, neo);
    },
    get(id) {
      return store.get(id);
    },
    lookup(ids) {
      const results: NeoData[] = [];
      for (const id of ids) {
        const neo = store.get(id);
        if (neo !== undefined) results.push(neo);
      }
      return results;
    },
    clear() {
      store.clear();
    },
    getAll() {
      return Array.from(store.values());
    },
    size() {
      return store.size;
    },
  };
}
