import { useEffect, useRef, useState } from "react";
import { SolarSystemScene } from "./components/SolarSystemScene";
import CachedDataBanner from "./components/CachedDataBanner";
import {
  loadSnapshot,
  parseNeows,
  fetchNeows,
  fetchCad,
  type FetchStatus,
} from "./core/dataFetcher";
import { neoPosition } from "./core/coordinateConverter";
import {
  FETCH_LOOKAHEAD_DAYS,
  MS_PER_DAY,
  NEO_INCLINATION_MAX_DEG,
  DEG2RAD,
} from "./core/constants";
import type { NeoData } from "./core/types";

const TWO_PI = 2 * Math.PI;
const INCLINATION_MAX_RAD = NEO_INCLINATION_MAX_DEG * DEG2RAD;

function enrichPositions(neos: NeoData[]): NeoData[] {
  const now = Date.now();
  const enriched: NeoData[] = [];
  for (let i = 0; i < neos.length; i++) {
    const neo = neos[i];
    const daysFromNow = (neo.approachDate.getTime() - now) / MS_PER_DAY;

    const idNum = parseInt(neo.id, 10);
    const h1 = isNaN(idNum)
      ? (i * 2654435761) >>> 0
      : (idNum * 2654435761) >>> 0;
    const h2 = (h1 * 2246822519) >>> 0;
    const h3 = (h2 * 2246822519) >>> 0;

    const azimuthRad = (h1 / 0x100000000) * TWO_PI;
    const sign = h3 < 0x80000000 ? 1 : -1;
    const inclinationRad =
      sign * Math.asin(h2 / 0x100000000) * INCLINATION_MAX_RAD;

    try {
      const position3d = neoPosition(
        neo.approachDate,
        neo.missDistKm,
        neo.velocityKmS,
        daysFromNow,
        azimuthRad,
        inclinationRad,
      );
      enriched.push({ ...neo, position3d });
    } catch {
      // skip NEOs with invalid coordinate inputs
    }
  }
  return enriched;
}

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<SolarSystemScene | null>(null);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>("live");

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new SolarSystemScene();
    sceneRef.current = scene;
    scene.init(containerRef.current);

    let cancelled = false;

    async function loadData() {
      const today = new Date();
      const end = new Date(today.getTime() + FETCH_LOOKAHEAD_DAYS * MS_PER_DAY);

      let neos: NeoData[] = [];

      try {
        const [response] = await Promise.all([
          fetchNeows(today, end),
          fetchCad(today, end),
        ]);
        neos = enrichPositions(parseNeows(response));
        setFetchStatus("live");
      } catch (err) {
        const status = (err as Error & { status?: number }).status;
        try {
          const snapshot = await loadSnapshot();
          neos = enrichPositions(parseNeows(snapshot));
          setFetchStatus(status === 429 ? "rate-limited" : "snapshot");
        } catch {
          neos = [];
          setFetchStatus("snapshot");
        }
      }

      if (cancelled) return;

      scene.updateNeoPoints(neos);
      scene.updatePlanetPositions(new Date());
    }

    loadData();

    return () => {
      cancelled = true;
      scene.dispose();
      sceneRef.current = null;
    };
  }, []);

  return (
    <div className="relative w-screen h-screen bg-[#000008] overflow-hidden">
      <CachedDataBanner status={fetchStatus} />
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
