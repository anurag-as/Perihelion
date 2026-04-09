import { useCallback, useEffect, useRef, useState } from "react";
import { SolarSystemScene } from "./components/SolarSystemScene";
import { NeoRaycaster } from "./components/Raycaster";
import CachedDataBanner from "./components/CachedDataBanner";
import ProximitySlider, {
  PROXIMITY_MAX_AU,
} from "./components/ProximitySlider";
import InfoPanel from "./components/InfoPanel";
import SceneControls from "./components/SceneControls";
import { ALL_CATEGORIES, neoCategory } from "./core/constants";
import type { NeoCategory } from "./core/types";
import SearchBar from "./components/SearchBar";
import StatsPanel from "./components/StatsPanel";
import TimeScrubber from "./components/TimeScrubber";
import WasmErrorOverlay from "./components/WasmErrorOverlay";
import {
  loadSnapshot,
  parseNeows,
  fetchNeows,
  fetchCad,
  NasaDataFetcher,
  type FetchStatus,
} from "./core/dataFetcher";
import { neoPosition, earthPositionAU } from "./core/coordinateConverter";
import { IndexManager } from "./core/indexManager";
import {
  FETCH_LOOKAHEAD_DAYS,
  SCRUBBER_FETCH_WINDOW_DAYS,
  MS_PER_DAY,
  NEO_INCLINATION_MAX_DEG,
  DEG2RAD,
} from "./core/constants";
import type { NeoData, LayerType, QueryState } from "./core/types";

const DEFAULT_RADIUS_AU = PROXIMITY_MAX_AU / 2;

const TWO_PI = 2 * Math.PI;
const INCLINATION_MAX_RAD = NEO_INCLINATION_MAX_DEG * DEG2RAD;

function enrichPositions(neos: NeoData[], referenceDate?: Date): NeoData[] {
  const enriched: NeoData[] = [];
  const ref = referenceDate ?? new Date();
  for (let i = 0; i < neos.length; i++) {
    const neo = neos[i];

    const idNum = parseInt(neo.id, 10);
    const h1 = Math.imul(isNaN(idNum) ? i : idNum, 2654435761) >>> 0;
    const h2 = Math.imul(h1, 2246822519) >>> 0;
    const h3 = Math.imul(h2, 3735928559) >>> 0;

    const azimuthRad = (h1 / 0x100000000) * TWO_PI;
    const sign = h3 < 0x80000000 ? 1 : -1;
    const inclinationRad = sign * (h2 / 0x100000000) * INCLINATION_MAX_RAD;

    // Propagate NEO to the reference date's position
    const daysFromNow =
      (ref.getTime() - neo.approachDate.getTime()) / MS_PER_DAY;

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
  // Holds the last successfully fetched NEO list so the retry handler can
  // rebuild the index without re-fetching.
  const lastNeosRef = useRef<NeoData[]>([]);
  const indexRef = useRef<IndexManager | null>(null);
  const raycasterRef = useRef<NeoRaycaster | null>(null);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>("live");
  const initialLoadDoneRef = useRef(false);
  const [indexManager] = useState(() => new IndexManager());
  const [scene, setScene] = useState<SolarSystemScene | null>(null);
  const [wasmError, setWasmError] = useState(false);
  const proximityRadiusRef = useRef(DEFAULT_RADIUS_AU);
  const [proximityRadius, setProximityRadius] = useState(DEFAULT_RADIUS_AU);
  const [proximityCount, setProximityCount] = useState(0);
  const [activeCategories, setActiveCategories] = useState<Set<NeoCategory>>(
    new Set(ALL_CATEGORIES),
  );
  const [selectedNeo, setSelectedNeo] = useState<NeoData | null>(null);
  const [scrubberDate, setScrubberDate] = useState<Date>(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  });
  const [scrubberLoading, setScrubberLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState<QueryState>(() => ({
    type: "range",
    centre: [0, 1, 0],
    radiusAU: DEFAULT_RADIUS_AU,
    timestamp: new Date(),
  }));
  const scrubberAbortRef = useRef<AbortController | null>(null);
  const scrubberDateRef = useRef<Date>(
    (() => {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      return d;
    })(),
  );

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
        const earthPos = earthPositionAU(scrubberDateRef.current ?? new Date());
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
      const earthPos = earthPositionAU(scrubberDateRef.current ?? new Date());
      setCurrentQuery({
        type: "range",
        centre: earthPos,
        radiusAU,
        timestamp: new Date(),
      });
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

  const onTimeChange = useCallback(
    async (date: Date) => {
      const index = indexRef.current;
      const scene = sceneRef.current;
      if (!index || !index.isReady() || !scene) return;
      if (!initialLoadDoneRef.current) return;

      // Cancel any in-flight time change.
      scrubberAbortRef.current?.abort();
      const abort = new AbortController();
      scrubberAbortRef.current = abort;

      setScrubberDate(date);
      scrubberDateRef.current = date;

      // Show spinner only if rebuild takes longer than 2s.
      const spinnerTimer = setTimeout(() => {
        if (!abort.signal.aborted) setScrubberLoading(true);
      }, 2000);

      try {
        const halfWindow = Math.floor(SCRUBBER_FETCH_WINDOW_DAYS / 2);
        const start = new Date(date.getTime() - halfWindow * MS_PER_DAY);
        const end = new Date(date.getTime() + halfWindow * MS_PER_DAY);
        let neos: NeoData[] = [];

        try {
          const response = await fetchNeows(start, end);
          if (abort.signal.aborted) return;
          neos = enrichPositions(parseNeows(response), date);
          setFetchStatus("live");
        } catch (err) {
          const status = (err as Error & { status?: number }).status;
          try {
            const snapshot = await loadSnapshot();
            if (abort.signal.aborted) return;
            neos = enrichPositions(parseNeows(snapshot), date);
            setFetchStatus(status === 429 ? "rate-limited" : "snapshot");
          } catch {
            neos = [];
            setFetchStatus("snapshot");
          }
        }

        if (abort.signal.aborted) return;

        // Rebuild index with new data; previous index stays active until swap.
        index.rebuild(neos);
        const enrichedNeos = index.getStore().getAll();
        scene.updateNeoPoints(enrichedNeos);
        scene.updatePlanetPositions(date);
        // Clear selection — the previous NEO may not exist in the new dataset.
        setSelectedNeo(null);

        const raycaster = raycasterRef.current;
        if (raycaster) {
          raycaster.setCamera(scene.getCamera());
          const pts = scene.getNeoPoints();
          if (pts) raycaster.setNeoPoints(pts, scene.displayNeos);
        }

        applyFilters(proximityRadiusRef.current, activeCategories);
      } finally {
        clearTimeout(spinnerTimer);
        if (!abort.signal.aborted) setScrubberLoading(false);
      }
    },
    [activeCategories, applyFilters],
  );

  const onLayerToggle = useCallback((layer: LayerType, enabled: boolean) => {
    sceneRef.current?.setLayerVisible(layer, enabled);
  }, []);

  const onHazardFilter = useCallback((enabled: boolean) => {
    sceneRef.current?.setLayerVisible("hazardOnly", enabled);
  }, []);

  // Re-attempt WASM init after a previous failure.
  const handleWasmRetry = useCallback(async () => {
    const index = indexRef.current;
    const scene = sceneRef.current;
    if (!index || !scene) return;
    try {
      await index.init();
      setWasmError(false);
      // Use the last fetched NEOs — the store is empty because init() failed
      // previously, so we cannot rely on index.getStore().getAll().
      const neos = lastNeosRef.current;
      index.rebuild(neos);
      const enrichedNeos = index.getStore().getAll();
      scene.updateNeoPoints(enrichedNeos);
      setSelectedNeo(null);
      const raycaster = raycasterRef.current;
      if (raycaster) {
        raycaster.setCamera(scene.getCamera());
        const pts = scene.getNeoPoints();
        if (pts) raycaster.setNeoPoints(pts, scene.displayNeos);
      }
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
      console.error("WASM retry failed:", e);
      setWasmError(true);
    }
  }, []);

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
      setCurrentQuery({
        type: "knn",
        centre: [worldPoint.x, worldPoint.y, worldPoint.z],
        k: 1,
        timestamp: new Date(),
      });
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new SolarSystemScene();
    sceneRef.current = scene;
    scene.init(containerRef.current);
    setScene(scene);

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
        neos = enrichPositions(parseNeows(response), today);
        setFetchStatus("live");
        initialLoadDoneRef.current = true;
        // Fetch CAD after NeoWs completes to avoid concurrent worker requests
        setTimeout(() => {
          fetchCad(today, end).catch((err) =>
            console.warn("CAD fetch failed (non-critical):", err),
          );
        }, 2000);
      } catch (err) {
        const status = (err as Error & { status?: number }).status;
        try {
          const snapshot = await loadSnapshot();
          neos = enrichPositions(parseNeows(snapshot), today);
          setFetchStatus(status === 429 ? "rate-limited" : "snapshot");
        } catch {
          neos = [];
          setFetchStatus("snapshot");
        }
      }

      if (cancelled) return;

      scene.updateNeoPoints(neos);
      scene.updatePlanetPositions(new Date());
      lastNeosRef.current = neos;

      const fetcher = new NasaDataFetcher();
      scene.updateMeteorShowers(fetcher.loadMeteorShowers());

      try {
        await index.init();
        if (cancelled) return;
        setWasmError(false);
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
        setWasmError(true);
      }
    }

    loadData();

    // Re-fetch every 60 minutes to keep NEO data current.
    const REFRESH_INTERVAL_MS = 60 * 60 * 1000;
    const refreshTimer = setInterval(() => {
      loadData().catch((err) => {
        console.warn("Auto-refresh failed:", err);
      });
    }, REFRESH_INTERVAL_MS);

    return () => {
      cancelled = true;
      clearInterval(refreshTimer);
      container.removeEventListener("click", handleClick);
      container.removeEventListener("mousemove", handleMove);
      scene.dispose();
      sceneRef.current = null;
      setScene(null);
      indexRef.current = null;
      raycasterRef.current = null;
    };
  }, [indexManager, onSceneClick]);

  return (
    <div className="relative w-screen h-screen bg-[#000008] overflow-hidden">
      <CachedDataBanner status={fetchStatus} />
      <div ref={containerRef} className="w-full h-full" />
      {wasmError && <WasmErrorOverlay onRetry={handleWasmRetry} />}
      {scrubberLoading && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none"
          aria-label="Rebuilding index"
          role="status"
        >
          <span className="text-[#00FF88] text-4xl animate-spin">⟳</span>
        </div>
      )}

      {/* Top-right: InfoPanel — full-width overlay on mobile, fixed panel on desktop */}
      <div className="absolute top-4 right-2 left-2 sm:left-auto sm:right-4 flex flex-col gap-2 items-stretch sm:items-end pointer-events-none">
        <div className="pointer-events-auto">
          <InfoPanel neo={selectedNeo} />
        </div>
      </div>

      {/* Bottom-left: controls — full-width stacked on mobile, compact on desktop */}
      <div className="absolute bottom-0 left-0 right-0 sm:bottom-4 sm:left-4 sm:right-auto flex flex-col gap-2 items-stretch sm:items-start p-2 sm:p-0 bg-black/60 sm:bg-transparent rounded-t-xl sm:rounded-none">
        <SearchBar onSearch={onSearch} disabled={wasmError} />
        <TimeScrubber
          date={scrubberDate}
          onChange={onTimeChange}
          isLoading={scrubberLoading}
          disabled={wasmError}
        />
        <ProximitySlider
          radiusAU={proximityRadius}
          matchCount={proximityCount}
          onChange={onProximityChange}
          disabled={wasmError}
        />
        <SceneControls
          activeCategories={activeCategories}
          onCategoryToggle={onCategoryToggle}
          onLayerToggle={onLayerToggle}
          onHazardFilter={onHazardFilter}
        />
      </div>

      {/* Bottom-right: StatsPanel — hidden on mobile by default, visible on sm+ */}
      <div className="hidden sm:flex absolute bottom-4 right-4 flex-col gap-2 items-end">
        <StatsPanel
          indexManager={indexManager}
          scene={scene}
          currentQuery={currentQuery}
        />
      </div>
    </div>
  );
}
