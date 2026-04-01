import {
  DEG2RAD,
  EARTH_ECCENTRICITY,
  EARTH_MEAN_ANOMALY_DEG,
  EARTH_MEAN_ANOMALY_RATE,
  EARTH_MEAN_LONGITUDE_DEG,
  EARTH_MEAN_LONGITUDE_RATE,
  EARTH_EQUATION_OF_CENTRE_A,
  EARTH_EQUATION_OF_CENTRE_B,
  EARTH_SEMI_MAJOR_AXIS_AU,
  J2000_MS,
  JULIAN_CENTURIES,
  KM_PER_AU,
  MS_PER_DAY,
  SEC_PER_DAY,
} from "./constants";

export function earthPositionAU(date: Date): [number, number, number] {
  const T = (date.getTime() - J2000_MS) / MS_PER_DAY / JULIAN_CENTURIES;
  const M =
    ((((EARTH_MEAN_ANOMALY_DEG + EARTH_MEAN_ANOMALY_RATE * T) % 360) + 360) %
      360) *
    DEG2RAD;
  const C =
    (EARTH_EQUATION_OF_CENTRE_A - EARTH_EQUATION_OF_CENTRE_B * T) * Math.sin(M);
  const L =
    ((((EARTH_MEAN_LONGITUDE_DEG + EARTH_MEAN_LONGITUDE_RATE * T + C) % 360) +
      360) %
      360) *
    DEG2RAD;
  const r = EARTH_SEMI_MAJOR_AXIS_AU - EARTH_ECCENTRICITY * Math.cos(M);
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
  const propagateAU = (velocityKmS * SEC_PER_DAY * daysFromNow) / KM_PER_AU;
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
    earthPos[1] + offset * sinI,
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
