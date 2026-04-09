import { useCallback, useEffect, useRef, useState } from "react";
import { SolarSystemScene } from "./components/SolarSystemScene";
import { NeoRaycaster } from "./components/Raycaster";
import CachedDataBanner from "./components/CachedDataBanner";
import ProximitySlider, {
  PROXIMITY_MAX_AU,
} from "./components/ProximitySlider";
import InfoPanel from "./components/InfoPanel";
import NeoLegend, {
  ALL_CATEGORIES,
  neoCategory,
  type NeoCategory,
} from "./components/NeoLegend";
import SearchBar from "./components/SearchBar";
import StatsPanel from "./components/StatsPanel";
import {
  loadSnapshot,
  parseNeows,
  fetchNeows,
  fetchCad,
  type FetchStatus,
} from "./core/dataFetcher";
import { neoPosition, earthPositionAU } from "./core/coordinateConverter";
import { IndexManager } from "./core/indexManager";
import {
  FETCH_LOOKAHEAD_DAYS,
  MS_PER_DAY,
  NEO_INCLINATION_MAX_DEG,
  DEG2RAD,
} from "./core/constants";
import type { NeoData } from "./core/types";

const DEFAULT_RADIUS_AU = PROXIMITY_MAX_AU / 2;

const TWO_PI = 2 * Math.PI;
const INCLINATION_MAX_RAD = NEO_INCLINATION_MAX_DEG * DEG2RAD;

function enrichPositions(neos: NeoData[]): NeoData[] {
  const enriched: NeoData[] = [];
  const today = new Date();
  for (let i = 0; i < neos.length; i++) {
    const neo = neos[i];

    const idNum = parseInt(neo.id, 10);
    const h1 = Math.imul(isNaN(idNum) ? i : idNum, 2654435761) >>> 0;
    const h2 = Math.imul(h1, 2246822519) >>> 0;
    const h3 = Math.imul(h2, 2246822519) >>> 0;

    const azimuthRad = (h1 / 0x100000000) * TWO_PI;
    const sign = h3 < 0x80000000 ? 1 : -1;
    const inclinationRad = sign * (h2 / 0x100000000) * INCLINATION_MAX_RAD;

    // Propagate NEO to today's position: daysFromNow is days from approachDate to today
    // (negative = today is before closest approach, positive = today is after)
    const daysFromNow =
      (today.getTime() - neo.approachDate.getTime()) / MS_PER_DAY;

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
  const indexRef = useRef<IndexManager | null>(null);
  const raycasterRef = useRef<NeoRaycaster | null>(null);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>("live");
  const [indexManager] = useState(() => new IndexManager());
  const proximityRadiusRef = useRef(DEFAULT_RADIUS_AU);
  const [proximityRadius, setProximityRadius] = useState(DEFAULT_RADIUS_AU);
  const [proximityCount, setProximityCount] = useState(0);
  const [activeCategories, setActiveCategories] = useState<Set<NeoCategory>>(
    new Set(ALL_CATEGORIES),
  );
  const [selectedNeo, setSelectedNeo] = useState<NeoData | null>(null);

  const applyFilters = useCallback(
    (radiusAU: number, categories: Set<NeoCategory>) => {
      const index = indexRef.current;
      const scene = sceneRef.current;
      if (!index || !index.isReady() || !scene) return;

      const atMax = radiusAU >= PROXIMITY_MAX_AU;
      const allCats = categories.size === ALL_CATEGORIES.length;

      // Get proximity candidates
      let candidates: NeoData[];
      if (atMax) {
        candidates = index.getStore().getAll();
      } else {
        const earthPos = earthPositionAU(new Date());
        candidates = index.rangeQuery(earthPos, radiusAU);
      }

      // Apply category filter
      const filtered = allCats
        ? candidates
        : candidates.filter((n) => categories.has(neoCategory(n)));

      if (atMax && allCats) {
        scene.highlightNeos(null);
      } else {
        const ids = new Set(
          filtered
            .map((n) => n.bonsaiId)
            .filter((id): id is bigint => id !== undefined),
        );
        scene.highlightNeos(ids);
      }
      setProximityCount(filtered.length);
    },
    [],
  );

  const onProximityChange = useCallback(
    (radiusAU: number) => {
      proximityRadiusRef.current = radiusAU;
      setProximityRadius(radiusAU);
      applyFilters(radiusAU, activeCategories);
    },
    [activeCategories, applyFilters],
  );

  const onCategoryToggle = useCallback(
    (category: NeoCategory) => {
      setActiveCategories((prev) => {
        const next = new Set(prev);
        if (next.has(category)) {
          next.delete(category);
        } else {
          next.add(category);
        }
        applyFilters(proximityRadiusRef.current, next);
        return next;
      });
    },
    [applyFilters],
  );

  const onSearch = useCallback(
    (query: string) => {
      const index = indexRef.current;
      const scene = sceneRef.current;
      if (!index || !index.isReady() || !scene) return;
      const trimmed = query.trim().toLowerCase();
      if (!trimmed) {
        // Empty query — restore normal filter state.
        applyFilters(proximityRadiusRef.current, activeCategories);
        return;
      }
      const all = index.getStore().getAll();
      const match = all.find((n) => n.name.toLowerCase().includes(trimmed));
      if (match) {
        setSelectedNeo(match);
        scene.selectNeo(match);
        scene.flyToNeo(match);
      }
    },
    [activeCategories, applyFilters],
  );

  const onSceneClick = useCallback((worldPoint: import("three").Vector3) => {
    const index = indexRef.current;
    const scene = sceneRef.current;
    if (!index || !index.isReady() || !scene) return;
    const nearest = index.knnQuery(
      [worldPoint.x, worldPoint.y, worldPoint.z],
      1,
    );
    if (nearest.length > 0) {
      setSelectedNeo(nearest[0]);
      scene.selectNeo(nearest[0]);
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new SolarSystemScene();
    sceneRef.current = scene;
    scene.init(containerRef.current);

    const index = indexManager;
    indexRef.current = index;

    const raycaster = new NeoRaycaster(
      (neo) => {
        setSelectedNeo(neo);
        scene.selectNeo(neo);
      },
      (worldPoint) => onSceneClick(worldPoint),
    );
    raycasterRef.current = raycaster;

    const container = containerRef.current;
    const handleClick = (e: MouseEvent) => {
      raycaster.onMouseClick(e, container);
    };
    const handleMove = (e: MouseEvent) => {
      raycaster.onMouseMove(e, container);
    };
    container.addEventListener("click", handleClick);
    container.addEventListener("mousemove", handleMove);

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

      try {
        await index.init();
        if (cancelled) return;
        index.rebuild(neos);
        // Re-render with bonsaiId-enriched NEOs from the index so highlightNeos
        // can correctly match by id.
        const enrichedNeos = index.getStore().getAll();
        scene.updateNeoPoints(enrichedNeos);
        setSelectedNeo(null);
        raycaster.setCamera(scene.getCamera());
        const pts = scene.getNeoPoints();
        if (pts) raycaster.setNeoPoints(pts, scene.displayNeos);
        const earthPos = earthPositionAU(new Date());
        const initMatches = index.rangeQuery(earthPos, DEFAULT_RADIUS_AU);
        const initIds = new Set(
          initMatches
            .map((n) => n.bonsaiId)
            .filter((id): id is bigint => id !== undefined),
        );
        scene.highlightNeos(initIds);
        setProximityCount(initMatches.length);
      } catch (e) {
        console.error("WASM init/rebuild failed:", e);
        // WASM unavailable — scene still renders without query features
      }
    }

    loadData();

    return () => {
      cancelled = true;
      container.removeEventListener("click", handleClick);
      container.removeEventListener("mousemove", handleMove);
      scene.dispose();
      sceneRef.current = null;
      indexRef.current = null;
      raycasterRef.current = null;
    };
  }, [indexManager]);

  return (
    <div className="relative w-screen h-screen bg-[#000008] overflow-hidden">
      <CachedDataBanner status={fetchStatus} />
      <div ref={containerRef} className="w-full h-full" />
      <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
        <NeoLegend
          activeCategories={activeCategories}
          onToggle={onCategoryToggle}
        />
        <InfoPanel neo={selectedNeo} />
      </div>
      <div className="absolute bottom-4 left-4 flex flex-col gap-2 items-start">
        <SearchBar onSearch={onSearch} />
        <ProximitySlider
          radiusAU={proximityRadius}
          matchCount={proximityCount}
          onChange={onProximityChange}
        />
      </div>
      <div className="absolute bottom-4 right-4">
        <StatsPanel indexManager={indexManager} />
      </div>
    </div>
  );
}
