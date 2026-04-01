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
import { MS_PER_DAY } from "./core/constants";
import type { NeoData } from "./core/types";

function enrichPositions(neos: NeoData[]): NeoData[] {
  const now = Date.now();
  const enriched: NeoData[] = [];
  for (const neo of neos) {
    const daysFromNow = (neo.approachDate.getTime() - now) / MS_PER_DAY;
    try {
      const position3d = neoPosition(
        neo.approachDate,
        neo.missDistKm,
        neo.velocityKmS,
        daysFromNow,
      );
      enriched.push({ ...neo, position3d });
    } catch {
      // Skip NEOs whose coordinate conversion fails (invalid inputs).
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
      const end = new Date(today.getTime() + 30 * MS_PER_DAY);

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
