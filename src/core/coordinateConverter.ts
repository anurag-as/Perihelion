import {
  DEG2RAD,
  EARTH_SEMI_MAJOR_AXIS_AU,
  J2000_MS,
  KM_PER_AU,
  MS_PER_DAY,
  SEC_PER_DAY,
} from "./constants";

export function earthPositionAU(date: Date): [number, number, number] {
  // Use the same mean-motion formula as updatePlanetPositions so the returned
  // position matches the rendered Earth mesh exactly.
  const daysSinceJ2000 = (date.getTime() - J2000_MS) / MS_PER_DAY;
  const L0 = 100.46; // Earth mean longitude at J2000 (degrees)
  const n = 0.98563; // Earth mean motion (degrees/day)
  const L = ((((L0 + n * daysSinceJ2000) % 360) + 360) % 360) * DEG2RAD;
  const r = EARTH_SEMI_MAJOR_AXIS_AU;
  return [r * Math.cos(L), 0.0, r * Math.sin(L)];
}

export function earthVelocityDirection(date: Date): [number, number, number] {
  const [x, , z] = earthPositionAU(date);
  const mag = Math.sqrt(x * x + z * z);
  return [-z / mag, 0.0, x / mag];
}

export function neoPosition(
  approachDate: Date,
  missDistanceKm: number,
  velocityKmS: number,
  daysFromNow: number,
  azimuthRad = 0,
  inclinationRad = 0,
): [number, number, number] {
  if (
    missDistanceKm <= 0 ||
    velocityKmS <= 0 ||
    !isFinite(missDistanceKm) ||
    !isFinite(velocityKmS) ||
    !isFinite(daysFromNow)
  ) {
    throw new Error(
      `neoPosition: invalid inputs — missDistanceKm=${missDistanceKm}, velocityKmS=${velocityKmS}, daysFromNow=${daysFromNow}`,
    );
  }

  const earthPos = earthPositionAU(approachDate);
  const missDistAU = missDistanceKm / KM_PER_AU;
  const dt = daysFromNow - (approachDate.getTime() - Date.now()) / MS_PER_DAY;
  const propagateAU = (velocityKmS * SEC_PER_DAY * dt) / KM_PER_AU;
  const offset = missDistAU + propagateAU;

  // Build offset direction from azimuth (in-plane rotation) and inclination (out-of-plane tilt).
  // radial = Sun→Earth unit vector in ecliptic XZ (Three.js convention).
  const [ex, , ez] = earthPos;
  const earthMag = Math.sqrt(ex * ex + ez * ez);
  const radialX = ex / earthMag;
  const radialZ = ez / earthMag;

  // Rotate radial by azimuth in the ecliptic XZ plane, then tilt by inclination toward Y.
  const inPlaneX =
    Math.cos(azimuthRad) * radialX - Math.sin(azimuthRad) * radialZ;
  const inPlaneZ =
    Math.cos(azimuthRad) * radialZ + Math.sin(azimuthRad) * radialX;
  const cosI = Math.cos(inclinationRad);
  const sinI = Math.sin(inclinationRad);

  return [
    earthPos[0] + offset * inPlaneX * cosI,
    offset * sinI,
    earthPos[2] + offset * inPlaneZ * cosI,
  ];
}

export function radiantToXYZ(
  raDeg: number,
  decDeg: number,
): [number, number, number] {
  const raRad = raDeg * DEG2RAD;
  const decRad = decDeg * DEG2RAD;
  return [
    Math.cos(decRad) * Math.cos(raRad),
    Math.cos(decRad) * Math.sin(raRad),
    Math.sin(decRad),
  ];
}
