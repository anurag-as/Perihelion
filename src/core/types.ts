export interface NeoData {
  id: string;
  name: string;
  diameterKm: number;
  hazardous: boolean;
  missDistKm: number;
  missDistLunar: number;
  velocityKmS: number;
  approachDate: Date;
  position3d: [number, number, number];
  bonsaiId?: bigint;
}

export interface MeteorShower {
  name: string;
  peak: string;
  raDeg: number;
  decDeg: number;
  zhr: number;
  velocityKmS: number;
  parent: string;
  position3d: [number, number, number];
}

export interface QueryState {
  type: "range" | "knn" | "hazard";
  centre: [number, number, number];
  radiusAU?: number;
  k?: number;
  timestamp: Date;
}

export type LayerType = "planets" | "trajectories" | "meteors" | "hazardOnly";

export type NeoCategory = "hazardous" | "close005" | "close010" | "far";

export interface KnnResult {
  ids: BigInt64Array;
  distances: Float64Array;
}

export interface BonsaiStats {
  backend_kind: number;
  point_count: number;
  migration_count: number;
  migrating: boolean;
  query_count: number;
}
