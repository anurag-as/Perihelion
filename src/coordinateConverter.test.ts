import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import {
  earthPositionAU,
  neoPosition,
  radiantToXYZ,
} from "./coordinateConverter";

const J2000_MS = 946728000000;
const KM_PER_AU = 149_597_870.7;

describe("CoordinateConverter", () => {
  describe("earthPositionAU", () => {
    it("orbital radius stays within [0.983, 1.017] AU for dates in [1900, 2100]", () => {
      fc.assert(
        fc.property(fc.integer({ min: -36525, max: 36525 }), (dayOffset) => {
          const date = new Date(J2000_MS + dayOffset * 86_400_000);
          const [x, y, z] = earthPositionAU(date);
          const r = Math.sqrt(x * x + y * y + z * z);
          return r >= 0.983 && r <= 1.017 && Math.abs(z) < 0.001;
        }),
      );
    });
  });

  describe("neoPosition", () => {
    it("throws on invalid inputs", () => {
      expect(() => neoPosition(new Date(), 0, 20, 0)).toThrow();
      expect(() => neoPosition(new Date(), -100, 20, 0)).toThrow();
      expect(() => neoPosition(new Date(), 500_000, 0, 0)).toThrow();
      expect(() => neoPosition(new Date(), 500_000, -5, 0)).toThrow();
      expect(() => neoPosition(new Date(), Infinity, 20, 0)).toThrow();
      expect(() => neoPosition(new Date(), 500_000, NaN, 0)).toThrow();
    });

    it("at closest approach, dist(result, earthPos) ≈ missDistAU within 1%", () => {
      fc.assert(
        fc.property(
          fc.float({ min: 1_000, max: 1_000_000, noNaN: true }), // missDistKm
          fc.float({ min: 1, max: 100, noNaN: true }), // velKmS
          fc.integer({ min: 1, max: 365 }), // days until approach
          (missDistKm, velKmS, daysUntil) => {
            const approachDate = new Date(J2000_MS + daysUntil * 86_400_000);
            const daysFromNow =
              (approachDate.getTime() - Date.now()) / 86_400_000;
            const [nx, ny, nz] = neoPosition(
              approachDate,
              missDistKm,
              velKmS,
              daysFromNow,
            );
            const [ex, ey, ez] = earthPositionAU(approachDate);
            const dx = nx - ex,
              dy = ny - ey,
              dz = nz - ez;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            return (
              Math.abs(dist - missDistKm / KM_PER_AU) /
                (missDistKm / KM_PER_AU) <
              0.01
            );
          },
        ),
      );
    });
  });

  describe("radiantToXYZ", () => {
    it("equator origin maps to [1, 0, 0]", () => {
      const [x, y, z] = radiantToXYZ(0, 0);
      expect(x).toBeCloseTo(1, 10);
      expect(y).toBeCloseTo(0, 10);
      expect(z).toBeCloseTo(0, 10);
    });

    it("north pole maps to [0, 0, 1]", () => {
      const [x, y, z] = radiantToXYZ(0, 90);
      expect(x).toBeCloseTo(0, 10);
      expect(y).toBeCloseTo(0, 10);
      expect(z).toBeCloseTo(1, 10);
    });

    it("result is always a unit vector", () => {
      fc.assert(
        fc.property(
          fc.float({ min: 0, max: 360, noNaN: true }),
          fc.float({ min: -90, max: 90, noNaN: true }),
          (raDeg, decDeg) => {
            const [x, y, z] = radiantToXYZ(raDeg, decDeg);
            return Math.abs(Math.sqrt(x * x + y * y + z * z) - 1.0) < 1e-10;
          },
        ),
      );
    });
  });
});
