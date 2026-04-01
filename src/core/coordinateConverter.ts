const DEG2RAD = Math.PI / 180;
const KM_PER_AU = 149_597_870.7;
const MS_PER_DAY = 86_400_000;

export function julianCenturies(date: Date): number {
  const jd = date.getTime() / MS_PER_DAY + 2440587.5;
  return (jd - 2451545.0) / 36525;
}

export function earthPositionAU(date: Date): [number, number, number] {
  const T = julianCenturies(date);
  const M = (357.5291 + 35999.0503 * T) * DEG2RAD;
  const C = (1.9146 - 0.004817 * T) * Math.sin(M);
  const L = 280.4665 + 36000.7698 * T + C;
  const r = 1.00014 - 0.01671 * Math.cos(M);
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
  const propagateAU = (velocityKmS * 86_400 * dt) / KM_PER_AU;

  // cross([vx, vy, 0], [0, 0, 1]) = [vy, -vx, 0]; already unit length since earthVelocityDirection is normalised
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
