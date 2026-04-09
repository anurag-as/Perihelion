import type { NeoCategory, NeoData } from "./types";

// ---------------------------------------------------------------------------
// Maths
// ---------------------------------------------------------------------------

export const DEG2RAD = Math.PI / 180;

// ---------------------------------------------------------------------------
// Astronomy / units
// ---------------------------------------------------------------------------

export const KM_PER_AU = 149_597_870.7;
export const MS_PER_DAY = 86_400_000;
export const SEC_PER_DAY = 86_400;

// J2000 epoch (Jan 1.5, 2000) as a Unix timestamp in milliseconds.
export const J2000_MS = 946_728_000_000;
// Julian date of the Unix epoch (Jan 1.0, 1970).
export const JD_UNIX_EPOCH = 2_440_587.5;
// Julian date of J2000.
export const JD_J2000 = 2_451_545.0;
// Julian centuries per year.
export const JULIAN_CENTURIES = 36_525;

// ---------------------------------------------------------------------------
// Keplerian Earth orbit coefficients
// ---------------------------------------------------------------------------

export const EARTH_MEAN_ANOMALY_DEG = 357.5291;
export const EARTH_MEAN_ANOMALY_RATE = 35_999.0503; // deg / Julian century
export const EARTH_EQUATION_OF_CENTRE_A = 1.9146;
export const EARTH_EQUATION_OF_CENTRE_B = 0.004817;
export const EARTH_MEAN_LONGITUDE_DEG = 100.4665;
export const EARTH_MEAN_LONGITUDE_RATE = 36_000.7698; // deg / Julian century
export const EARTH_SEMI_MAJOR_AXIS_AU = 1.00014;
export const EARTH_ECCENTRICITY = 0.01671;

// ---------------------------------------------------------------------------
// Planet orbital elements at J2000 (mean longitude L0 in degrees, mean
// daily motion n in degrees/day, orbital radius in AU, display size in AU)
// ---------------------------------------------------------------------------

export const PLANET_DATA = [
  {
    name: "Mercury",
    radiusAU: 0.387,
    color: "#b5b5b5",
    textureUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Solarsystemscope_texture_2k_mercury.jpg",
    size: 0.012,
    L0: 252.25,
    n: 4.09234,
  },
  {
    name: "Venus",
    radiusAU: 0.723,
    color: "#e8cda0",
    textureUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/Solarsystemscope_texture_2k_venus_surface.jpg",
    size: 0.03,
    L0: 181.98,
    n: 1.60214,
  },
  {
    name: "Earth",
    radiusAU: 1.0,
    color: "#4fa3e0",
    textureUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solarsystemscope_texture_2k_earth_daymap.jpg",
    size: 0.032,
    L0: 100.46,
    n: 0.98563,
  },
  {
    name: "Mars",
    radiusAU: 1.524,
    color: "#c1440e",
    textureUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/46/Solarsystemscope_texture_2k_mars.jpg",
    size: 0.017,
    L0: 355.43,
    n: 0.52403,
  },
  {
    name: "Jupiter",
    radiusAU: 5.203,
    color: "#c88b3a",
    textureUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Solarsystemscope_texture_2k_jupiter.jpg",
    size: 0.12,
    L0: 34.4,
    n: 0.08309,
  },
  {
    name: "Saturn",
    radiusAU: 9.537,
    color: "#e4d191",
    textureUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/Solarsystemscope_texture_2k_saturn.jpg",
    size: 0.1,
    L0: 49.94,
    n: 0.03346,
  },
  {
    name: "Uranus",
    radiusAU: 19.19,
    color: "#7de8e8",
    textureUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Solarsystemscope_texture_2k_uranus.jpg",
    size: 0.055,
    L0: 313.23,
    n: 0.01172,
  },
  {
    name: "Neptune",
    radiusAU: 30.07,
    color: "#4b70dd",
    textureUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Solarsystemscope_texture_2k_neptune.jpg",
    size: 0.052,
    L0: 304.88,
    n: 0.00598,
  },
] as const;

// ---------------------------------------------------------------------------
// NEO colour coding (RGB 0..1) — deuteranopia-safe palette
// ---------------------------------------------------------------------------

export const COLOUR_HAZARDOUS: readonly [number, number, number] = [
  1.0, 0.267, 0.133,
]; // #FF4422
export const COLOUR_CLOSE_005: readonly [number, number, number] = [
  1.0, 0.667, 0.0,
]; // #FFAA00
export const COLOUR_CLOSE_010: readonly [number, number, number] = [
  0.533, 0.8, 1.0,
]; // #88CCFF
export const COLOUR_FAR: readonly [number, number, number] = [
  0.2, 0.267, 0.333,
]; // #334455
export const COLOUR_SELECTED: readonly [number, number, number] = [
  1.0, 1.0, 1.0,
]; // #FFFFFF (pulsing)
export const COLOUR_HIGHLIGHT: readonly [number, number, number] = [
  0.0, 1.0, 0.533,
]; // #00FF88
export const COLOUR_DIM: readonly [number, number, number] = [
  0.2, 0.267, 0.333,
]; // #334455

export const PROXIMITY_MIN_AU = 0.01;
export const PROXIMITY_MAX_AU = 0.5;
export const PROXIMITY_SLIDER_STEP_AU = 0.01;

// ---------------------------------------------------------------------------
// Scene rendering
// ---------------------------------------------------------------------------

export const SCENE_BACKGROUND_HEX = 0x000008;
export const SUN_RADIUS_AU = 0.05;
export const SUN_COLOUR_HEX = 0xffdd44;
export const SUN_EMISSIVE_HEX = 0xffaa00;
export const SUN_TEXTURE_URL =
  "https://upload.wikimedia.org/wikipedia/commons/c/cb/Solarsystemscope_texture_2k_sun.jpg";
export const AMBIENT_LIGHT_HEX = 0xffffff;
export const AMBIENT_LIGHT_INTENSITY = 0.3;
export const SUN_LIGHT_HEX = 0xfff4e0;
export const SUN_LIGHT_INTENSITY = 2;
export const SUN_LIGHT_DISTANCE_AU = 200;

export const CAMERA_FOV = 60;
export const CAMERA_NEAR = 0.001;
export const CAMERA_FAR = 1000;
export const CAMERA_INITIAL_Y = 0.8;
export const CAMERA_INITIAL_Z = 1.5;
export const ORBIT_DAMPING_FACTOR = 0.05;
export const ORBIT_MIN_DISTANCE = 0.1;
export const ORBIT_MAX_DISTANCE = 200;

export const NEO_POINT_SIZE = 0.06;
export const NEO_MIN_PIXEL_SIZE = 4.0;
export const NEO_MAX_PIXEL_SIZE = 18.0;
export const NEO_DIAMETER_LOG_MIN_KM = 0.01;
export const NEO_DIAMETER_LOG_MAX_KM = 10.0;
export const NEO_ATLAS_COLS = 3;
export const NEO_ATLAS_ROWS = 2;
export const NEO_ATLAS_CELL_PX = 64;
export const NEO_ATLAS_ALPHA_DISCARD = 0.05;
export const NEO_SPRITE_TEXTURE_URL =
  "https://upload.wikimedia.org/wikipedia/commons/2/2c/Generic_Celestia_asteroid_texture.jpg";
export const NEO_ATLAS_SEEDS = [
  0x4e454f, 0x524f43, 0x4b5354, 0x415354, 0x45524f, 0x494441,
] as const;
// Proximity thresholds used for colour bucketing.
export const PROXIMITY_CLOSE_AU = 0.05;
export const PROXIMITY_MID_AU = 0.1;
export const HAZARD_DIAMOND_ALPHA_TEST = 0.1;
export const HAZARD_DIAMOND_SIZE = 0.1;
export const HAZARD_DIAMOND_PIXEL_SIZE = 12.0;
export const HAZARD_ALPHA_DISCARD = 0.05;
export const NEO_ALPHA_DISCARD = 0.01;
export const DIAMOND_STROKE_LINE_WIDTH = 2;
export const ORBIT_RING_TUBE_RATIO = 0.003;
export const ORBIT_RING_MIN_TUBE = 0.002;
export const ORBIT_RING_OPACITY = 0.35;
export const ORBIT_RING_COLOUR_HEX = 0x334455;
export const ORBIT_RING_TUBE_SEGMENTS = 8;
export const ORBIT_RING_PATH_SEGMENTS = 256;
export const PLANET_SPHERE_SEGMENTS = 32;
export const SUN_SPHERE_SEGMENTS = 32;

// ---------------------------------------------------------------------------
// Scene flash / migration animation
// ---------------------------------------------------------------------------

export const FLASH_FRAMES = 30;
export const FLASH_OPACITY = 0.35;
export const FLASH_COLOUR_HEX = 0x00ffcc;
export const FLASH_Z_OFFSET = -0.1;
export const FLASH_RENDER_ORDER = 999;

// ---------------------------------------------------------------------------
// Fly-to animation
// ---------------------------------------------------------------------------

export const FLY_TO_FRAMES = 60;
export const FLY_TO_OFFSET_AU = 0.5;
export const FLY_TO_ALPHA_START = 0.02;
export const FLY_TO_ALPHA_RANGE = 0.08;

// ---------------------------------------------------------------------------
// Trajectory arcs
// ---------------------------------------------------------------------------

export const TRAJECTORY_ARC_POINTS = 180;
export const TRAJECTORY_ARC_HALF_DAYS = 30;
export const TRAJECTORY_ARC_OPACITY = 0.4;

// ---------------------------------------------------------------------------
// Meteor shower rendering
// ---------------------------------------------------------------------------

export const METEOR_RADIANT_DISTANCE_AU = 2.0;
export const METEOR_MAX_ZHR = 150;
export const METEOR_CONE_HEIGHT_MIN = 0.08;
export const METEOR_CONE_HEIGHT_RANGE = 0.12;
export const METEOR_CONE_RADIUS_MIN = 0.02;
export const METEOR_CONE_RADIUS_RANGE = 0.04;
export const METEOR_CONE_SEGMENTS = 8;
export const METEOR_OPACITY_MIN = 0.6;
export const METEOR_OPACITY_RANGE = 0.3;

// ---------------------------------------------------------------------------
// Asteroid atlas sprite shape
// ---------------------------------------------------------------------------

export const ASTEROID_SHAPE_POINTS = 8;
export const ASTEROID_SHAPE_RADIUS_MIN = 0.82;
export const ASTEROID_SHAPE_RADIUS_JITTER = 0.18;
export const ASTEROID_SHAPE_ANGLE_JITTER = 0.25;
export const ASTEROID_HIGHLIGHT_OFFSET = 0.25;

// ---------------------------------------------------------------------------
// Raycaster
// ---------------------------------------------------------------------------

export const RAYCASTER_POINT_THRESHOLD = 0.015;

// ---------------------------------------------------------------------------
// InstancedMesh for top-N closest NEOs
// ---------------------------------------------------------------------------

export const NEO_INSTANCED_TOP_N = 20;
// Visual scale multiplier so spheres are visible at solar-system scale.
export const NEO_INSTANCED_SCALE_MULTIPLIER = 800;
// Minimum rendered radius in AU so tiny NEOs are still visible.
export const NEO_INSTANCED_MIN_RADIUS_AU = 0.003;

export const PULSE_SPEED = 0.003;
export const PULSE_MIN_BRIGHTNESS = 0.6;
export const PULSE_BRIGHTNESS_RANGE = 0.4;

export const DIAMOND_TEXTURE_SIZE = 32;
export const DIAMOND_TEXTURE_PAD = 3;
export const DIAMOND_STROKE_COLOUR = "#FF4422";

// ---------------------------------------------------------------------------
// Data fetching
// ---------------------------------------------------------------------------

export const CACHE_TTL_MS = 3_600_000;
export const MAX_NEOWS_DAYS = 7;
export const JPL_CAD_DIST_MAX = 0.2;
export const WORKER_BASE = "https://orange-waterfall-4401.sampathanurag3.workers.dev";
export const NASA_NEOWS_BASE = import.meta.env.DEV
  ? "https://api.nasa.gov/neo/rest/v1/feed"
  : `${WORKER_BASE}/neo/rest/v1/feed`;
export const JPL_CAD_PROD_BASE = WORKER_BASE;
export const JPL_CAD_DEV_PROXY = "/api/jpl";
export const SNAPSHOT_PATH = `${import.meta.env.BASE_URL}neo_snapshot.json`;

export const FETCH_TIMEOUT_MS = 10_000;
export const FETCH_LOOKAHEAD_DAYS = 30;
export const SCRUBBER_FETCH_WINDOW_DAYS = 30;

// ---------------------------------------------------------------------------
// InfoPanel
// ---------------------------------------------------------------------------

export const JPL_SBDB_URL_BASE =
  "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=";
export const INFO_PANEL_COPY_RESET_MS = 2000;
export const MISS_DIST_MEGA_KM_THRESHOLD = 1_000_000;
export const NEO_INCLINATION_MAX_DEG = 80;

// ---------------------------------------------------------------------------
// Bonsai backend kind → display name and cost-model explanation
// ---------------------------------------------------------------------------

export const BONSAI_GITHUB_URL = "https://github.com/anurag-as/Bonsai";
export const BONSAI_TOAST_DURATION_MS = 3_000;

export const BONSAI_BACKEND_NAMES: Record<number, string> = {
  0: "R-tree",
  1: "KD-tree",
  2: "Quadtree",
  3: "Grid",
};

export const BONSAI_COST_MODEL: Record<number, string> = {
  0: "Balanced for mixed workloads — good range and kNN performance",
  1: "Optimised for kNN queries on uniformly distributed data",
  2: "Efficient for clustered 2D/3D data with spatial locality",
  3: "Fast uniform-grid lookups — best for evenly spaced data",
};

// ---------------------------------------------------------------------------
// NEO legend entries — category, display colour, and label
// ---------------------------------------------------------------------------

export const NEO_LEGEND_ENTRIES = [
  {
    category: "hazardous" as const,
    color: "#FF4422",
    label: "Potentially hazardous",
  },
  { category: "close005" as const, color: "#FFAA00", label: "Within 0.05 AU" },
  { category: "close010" as const, color: "#88CCFF", label: "Within 0.1 AU" },
  { category: "far" as const, color: "#334455", label: "Beyond 0.1 AU" },
] as const;

export const ALL_CATEGORIES = [
  "hazardous",
  "close005",
  "close010",
  "far",
] as const;

export function neoCategory(neo: NeoData): NeoCategory {
  if (neo.hazardous) return "hazardous";
  const distAU = neo.missDistKm / KM_PER_AU;
  if (distAU <= PROXIMITY_CLOSE_AU) return "close005";
  if (distAU <= PROXIMITY_MID_AU) return "close010";
  return "far";
}
