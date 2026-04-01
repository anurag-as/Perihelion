import {
  DEG2RAD,
  EARTH_ECCENTRICITY,
  EARTH_EQUATION_OF_CENTRE_A,
  EARTH_EQUATION_OF_CENTRE_B,
  EARTH_MEAN_ANOMALY_DEG,
  EARTH_MEAN_ANOMALY_RATE,
  EARTH_MEAN_LONGITUDE_DEG,
  EARTH_MEAN_LONGITUDE_RATE,
  EARTH_SEMI_MAJOR_AXIS_AU,
  JD_J2000,
  JD_UNIX_EPOCH,
  JULIAN_CENTURIES,
  KM_PER_AU,
  MS_PER_DAY,
  SEC_PER_DAY,
} from "./constants";

export function julianCenturies(date: Date): number {
  const jd = date.getTime() / MS_PER_DAY + JD_UNIX_EPOCH;
  return (jd - JD_J2000) / JULIAN_CENTURIES;
}

export function earthPositionAU(date: Date): [number, number, number] {
  const T = julianCenturies(date);
  const M = (EARTH_MEAN_ANOMALY_DEG + EARTH_MEAN_ANOMALY_RATE * T) * DEG2RAD;
  const C =
    (EARTH_EQUATION_OF_CENTRE_A - EARTH_EQUATION_OF_CENTRE_B * T) * Math.sin(M);
  const L = EARTH_MEAN_LONGITUDE_DEG + EARTH_MEAN_LONGITUDE_RATE * T + C;
  const r = EARTH_SEMI_MAJOR_AXIS_AU - EARTH_ECCENTRICITY * Math.cos(M);
  return [r * Math.cos(L * DEG2RAD), r * Math.sin(L * DEG2RAD), 0.0];
}

export function earthVelocityDirection(date: Date): [number, number, number] {
  const [x, y] = earthPositionAU(date);
  const mag = Math.sqrt(x * x + y * y);
  return [-y / mag, x / mag, 0.0];
}

export function neoPosition(
  approachDate: Date,
  missDistanceKm: number,
  velocityKmS: number,
  daysFromNow: number,
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

  // cross([vx, vy, 0], [0, 0, 1]) = [vy, -vx, 0]; unit length since earthVelocityDirection is normalised
  const [vx, vy] = earthVelocityDirection(approachDate);
  const offset = missDistAU + propagateAU;
  return [earthPos[0] + vy * offset, earthPos[1] + -vx * offset, earthPos[2]];
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
