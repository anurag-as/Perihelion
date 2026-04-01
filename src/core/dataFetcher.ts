import type { MeteorShower, NeoData } from "./types";
import { radiantToXYZ } from "./coordinateConverter";
import imoData from "../../public/imo_showers.json";

const KM_PER_AU = 149_597_870.7;
const MAX_NEOWS_DAYS = 7;
const NASA_API_KEY = (() => {
  try {
    const key = import.meta.env?.VITE_NASA_API_KEY as string | undefined;
    if (key && key.length > 0) return key;
  } catch {}
  return "DEMO_KEY";
})();
const JPL_BASE =
  import.meta.env?.DEV === true ? "/api/jpl" : "https://ssd-api.jpl.nasa.gov";

export type FetchStatus = "live" | "cached" | "snapshot" | "rate-limited";

export interface NasaDataFetcherOptions {
  onStatusChange?: (status: FetchStatus) => void;
}

export interface NeowsAsteroid {
  id: string;
  name: string;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: Array<{
    close_approach_date: string;
    relative_velocity: { kilometers_per_second: string };
    miss_distance: { kilometers: string; lunar: string };
  }>;
}

export interface NeowsResponse {
  near_earth_objects: Record<string, NeowsAsteroid[]>;
}

export interface CadEntry {
  des: string;
  cd: string;
  dist: string;
  v_rel: string;
}

export interface CadResponse {
  fields: string[];
  data: string[][];
}

export interface DataFetcher {
  fetchAndIndex(startDate: Date, endDate: Date): Promise<void>;
  fetchNeows(startDate: Date, endDate: Date): Promise<NeowsResponse>;
  fetchCad(startDate: Date, endDate: Date): Promise<CadResponse>;
  loadMeteorShowers(): MeteorShower[];
}

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date.getTime());
  d.setUTCDate(d.getUTCDate() + days);
  return d;
}

function daysBetween(a: Date, b: Date): number {
  return Math.round((b.getTime() - a.getTime()) / 86_400_000);
}

async function safeFetch(url: string): Promise<Response> {
  const res = await fetch(url);
  if (res.status === 429) {
    const err = new Error(`Rate limit exceeded (HTTP 429): ${url}`);
    (err as Error & { status: number }).status = 429;
    throw err;
  }
  if (!res.ok) {
    const err = new Error(`HTTP ${res.status} fetching ${url}`);
    (err as Error & { status: number }).status = res.status;
    throw err;
  }
  return res;
}

const CACHE_TTL_MS = 3_600_000; // 1 hour

interface CacheEntry<T> {
  data: T;
  cachedAt: number;
}

function cacheGet<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const entry = JSON.parse(raw) as CacheEntry<T>;
    if (Date.now() - entry.cachedAt > CACHE_TTL_MS) {
      localStorage.removeItem(key);
      return null;
    }
    return entry.data;
  } catch {
    return null;
  }
}

function cacheSet<T>(key: string, data: T): void {
  try {
    const entry: CacheEntry<T> = { data, cachedAt: Date.now() };
    localStorage.setItem(key, JSON.stringify(entry));
  } catch {}
}

async function fetchNeowsChunk(
  startDate: Date,
  endDate: Date,
): Promise<NeowsResponse> {
  const cacheKey = `neows:${formatDate(startDate)}:${formatDate(endDate)}`;
  const cached = cacheGet<NeowsResponse>(cacheKey);
  if (cached) return cached;

  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${formatDate(startDate)}&end_date=${formatDate(endDate)}&api_key=${NASA_API_KEY}`;
  const res = await safeFetch(url);
  const data = (await res.json()) as NeowsResponse;
  cacheSet(cacheKey, data);
  return data;
}

export async function fetchNeows(
  startDate: Date,
  endDate: Date,
): Promise<NeowsResponse> {
  const totalDays = daysBetween(startDate, endDate);

  if (totalDays < MAX_NEOWS_DAYS) {
    return fetchNeowsChunk(startDate, endDate);
  }

  // Split into 7-day inclusive chunks and merge near_earth_objects.
  // Use date comparison rather than daysBetween to avoid rounding edge cases.
  const chunks: Array<Promise<NeowsResponse>> = [];
  let chunkStart = startDate;
  while (chunkStart <= endDate) {
    const chunkEnd = addDays(chunkStart, MAX_NEOWS_DAYS - 1);
    const actualEnd = chunkEnd < endDate ? chunkEnd : endDate;
    chunks.push(fetchNeowsChunk(chunkStart, actualEnd));
    chunkStart = addDays(actualEnd, 1);
  }

  const results = await Promise.all(chunks);
  const merged: NeowsResponse = { near_earth_objects: {} };
  for (const r of results) {
    Object.assign(merged.near_earth_objects, r.near_earth_objects);
  }
  return merged;
}

export async function fetchCad(
  startDate: Date,
  endDate: Date,
): Promise<CadResponse> {
  const cacheKey = `cad:${formatDate(startDate)}:${formatDate(endDate)}`;
  const cached = cacheGet<CadResponse>(cacheKey);
  if (cached) return cached;

  const url = `${JPL_BASE}/cad.api?date-min=${formatDate(startDate)}&date-max=${formatDate(endDate)}&dist-max=0.2`;
  const res = await safeFetch(url);
  const data = (await res.json()) as CadResponse;
  cacheSet(cacheKey, data);
  return data;
}

export function parseNeows(response: NeowsResponse): NeoData[] {
  const results: NeoData[] = [];

  for (const asteroids of Object.values(response.near_earth_objects)) {
    for (const asteroid of asteroids) {
      const approach = asteroid.close_approach_data[0];
      if (!approach) continue;

      const missDistKm = parseFloat(approach.miss_distance.kilometers);
      const velocityKmS = parseFloat(
        approach.relative_velocity.kilometers_per_second,
      );
      const approachDate = new Date(approach.close_approach_date);

      if (
        missDistKm <= 0 ||
        velocityKmS <= 0 ||
        !isFinite(missDistKm) ||
        !isFinite(velocityKmS) ||
        isNaN(approachDate.getTime())
      ) {
        console.warn(
          `Skipping NEO ${asteroid.id}: invalid missDistKm=${missDistKm}, velocityKmS=${velocityKmS}, or approachDate=${approach.close_approach_date}`,
        );
        continue;
      }

      const missDistAU = missDistKm / KM_PER_AU;
      // position3d placeholder — CoordinateConverter will replace this in task 6
      const position3d: [number, number, number] = [missDistAU, 0, 0];

      results.push({
        id: asteroid.id,
        name: asteroid.name,
        diameterKm:
          asteroid.estimated_diameter.kilometers.estimated_diameter_max,
        hazardous: asteroid.is_potentially_hazardous_asteroid,
        missDistKm,
        missDistLunar: parseFloat(approach.miss_distance.lunar),
        velocityKmS,
        approachDate,
        position3d,
      });
    }
  }

  return results;
}

export async function loadSnapshot(): Promise<NeowsResponse> {
  const res = await fetch("/neo_snapshot.json");
  if (!res.ok) {
    throw new Error(`Failed to load snapshot: HTTP ${res.status}`);
  }
  const data = (await res.json()) as NeoData[] | NeowsResponse;
  // snapshot may be a raw NeoData[] (empty array stub) or a NeowsResponse
  if (Array.isArray(data)) {
    return { near_earth_objects: {} };
  }
  return data as NeowsResponse;
}

export class NasaDataFetcher implements DataFetcher {
  private readonly onStatusChange?: (status: FetchStatus) => void;

  constructor(options?: NasaDataFetcherOptions) {
    this.onStatusChange = options?.onStatusChange;
  }

  async fetchAndIndex(startDate: Date, endDate: Date): Promise<void> {
    let isRateLimited = false;

    try {
      await Promise.all([
        this.fetchNeows(startDate, endDate),
        this.fetchCad(startDate, endDate),
      ]);
      this.onStatusChange?.("live");
    } catch (err) {
      if ((err as Error & { status?: number }).status === 429) {
        isRateLimited = true;
      }

      try {
        await loadSnapshot();
        this.onStatusChange?.(isRateLimited ? "rate-limited" : "snapshot");
      } catch {
        this.onStatusChange?.("snapshot");
      }
    }
  }

  async fetchNeows(startDate: Date, endDate: Date): Promise<NeowsResponse> {
    return fetchNeows(startDate, endDate);
  }

  async fetchCad(startDate: Date, endDate: Date): Promise<CadResponse> {
    return fetchCad(startDate, endDate);
  }

  loadMeteorShowers(): MeteorShower[] {
    return imoData.map((entry) => ({
      ...entry,
      position3d: radiantToXYZ(entry.raDeg, entry.decDeg),
    }));
  }
}
