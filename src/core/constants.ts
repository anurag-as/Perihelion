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
export const EARTH_MEAN_LONGITUDE_DEG = 280.4665;
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
    textureUrl: "https://upload.wikimedia.org/wikipedia/commons/9/92/Solarsystemscope_texture_2k_mercury.jpg",
    size: 0.012,
    L0: 252.25,
    n: 4.09234,
  },
  {
    name: "Venus",
    radiusAU: 0.723,
    color: "#e8cda0",
    textureUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/Solarsystemscope_texture_2k_venus_surface.jpg",
    size: 0.030,
    L0: 181.98,
    n: 1.60214,
  },
  {
    name: "Earth",
    radiusAU: 1.0,
    color: "#4fa3e0",
    textureUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solarsystemscope_texture_2k_earth_daymap.jpg",
    size: 0.032,
    L0: 100.46,
    n: 0.98563,
  },
  {
    name: "Mars",
    radiusAU: 1.524,
    color: "#c1440e",
    textureUrl: "https://upload.wikimedia.org/wikipedia/commons/4/46/Solarsystemscope_texture_2k_mars.jpg",
    size: 0.017,
    L0: 355.43,
    n: 0.52403,
  },
  {
    name: "Jupiter",
    radiusAU: 5.203,
    color: "#c88b3a",
    textureUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/Solarsystemscope_texture_2k_jupiter.jpg",
    size: 0.120,
    L0: 34.4,
    n: 0.08309,
  },
  {
    name: "Saturn",
    radiusAU: 9.537,
    color: "#e4d191",
    textureUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Solarsystemscope_texture_2k_saturn.jpg",
    size: 0.100,
    L0: 49.94,
    n: 0.03346,
  },
  {
    name: "Uranus",
    radiusAU: 19.19,
    color: "#7de8e8",
    textureUrl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Solarsystemscope_texture_2k_uranus.jpg",
    size: 0.055,
    L0: 313.23,
    n: 0.01172,
  },
  {
    name: "Neptune",
    radiusAU: 30.07,
    color: "#4b70dd",
    textureUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Solarsystemscope_texture_2k_neptune.jpg",
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

// Proximity thresholds used for colour bucketing.
export const PROXIMITY_CLOSE_AU = 0.05;
export const PROXIMITY_MID_AU = 0.1;

// ---------------------------------------------------------------------------
// Scene rendering
// ---------------------------------------------------------------------------

export const SCENE_BACKGROUND_HEX = 0x000008;
export const SUN_RADIUS_AU = 0.05;
export const SUN_COLOUR_HEX = 0xffdd44;
export const SUN_EMISSIVE_HEX = 0xffaa00;
export const SUN_TEXTURE_URL = "https://upload.wikimedia.org/wikipedia/commons/c/cb/Solarsystemscope_texture_2k_sun.jpg";
export const AMBIENT_LIGHT_HEX = 0xffffff;
export const AMBIENT_LIGHT_INTENSITY = 0.3;
export const SUN_LIGHT_HEX = 0xfff4e0;
export const SUN_LIGHT_INTENSITY = 2;
export const SUN_LIGHT_DISTANCE_AU = 200;

export const CAMERA_FOV = 60;
export const CAMERA_NEAR = 0.001;
export const CAMERA_FAR = 1000;
export const CAMERA_INITIAL_Y = 8;
export const CAMERA_INITIAL_Z = 20;
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
export const HAZARD_DIAMOND_SIZE = 0.1;
export const HAZARD_DIAMOND_ALPHA_TEST = 0.1;
export const ORBIT_RING_TUBE_RATIO = 0.003;
export const ORBIT_RING_MIN_TUBE = 0.002;
export const ORBIT_RING_OPACITY = 0.35;
export const ORBIT_RING_COLOUR_HEX = 0x334455;
export const ORBIT_RING_TUBE_SEGMENTS = 8;
export const ORBIT_RING_PATH_SEGMENTS = 256;
export const PLANET_SPHERE_SEGMENTS = 32;
export const SUN_SPHERE_SEGMENTS = 32;

export const FLY_TO_FRAMES = 60;
export const FLY_TO_OFFSET_AU = 0.5;
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
export const NASA_NEOWS_BASE = "https://api.nasa.gov/neo/rest/v1/feed";
export const JPL_CAD_PROD_BASE = "https://ssd-api.jpl.nasa.gov";
export const JPL_CAD_DEV_PROXY = "/api/jpl";
export const SNAPSHOT_PATH = "/neo_snapshot.json";

export const FETCH_LOOKAHEAD_DAYS = 30;
export const NEO_INCLINATION_MAX_DEG = 80;
