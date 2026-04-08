import { useEffect, useRef, useState } from "react";
import type { NeoData } from "../core/types";
import {
  INFO_PANEL_COPY_RESET_MS,
  JPL_SBDB_URL_BASE,
  KM_PER_AU,
  MISS_DIST_MEGA_KM_THRESHOLD,
} from "../core/constants";

interface InfoPanelProps {
  neo: NeoData | null;
}

function generateExportSnippet(neo: NeoData): string {
  const [x, y, z] = neo.position3d;
  return (
    `// kNN query for NEO: ${neo.name}\n` +
    `index.knnQuery([${x.toFixed(6)}, ${y.toFixed(6)}, ${z.toFixed(6)}], 1);`
  );
}

function formatKm(km: number): string {
  return km >= MISS_DIST_MEGA_KM_THRESHOLD
    ? `${(km / MISS_DIST_MEGA_KM_THRESHOLD).toFixed(2)} M km`
    : `${Math.round(km).toLocaleString()} km`;
}

export default function InfoPanel({ neo }: InfoPanelProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!neo) return null;

  const jplUrl = `${JPL_SBDB_URL_BASE}${encodeURIComponent(neo.id)}`;

  async function handleExport() {
    const snippet = generateExportSnippet(neo!);
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(
        () => setCopied(false),
        INFO_PANEL_COPY_RESET_MS,
      );
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <div className="bg-black/80 border border-white/10 text-white text-sm rounded-lg p-4 w-64 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-2">
        <span className="font-semibold text-base leading-tight truncate">
          {neo.name}
        </span>
        {neo.hazardous && (
          <span
            className="shrink-0 text-xs font-bold px-1.5 py-0.5 rounded"
            style={{ color: "#FF4422", border: "1px solid #FF4422" }}
            aria-label="Potentially hazardous"
          >
            ◆ PHA
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-gray-300">
        <span className="text-gray-500">Diameter</span>
        <span>{neo.diameterKm.toFixed(3)} km</span>

        <span className="text-gray-500">Miss dist</span>
        <span>
          {formatKm(neo.missDistKm)}
          <span className="text-gray-500 ml-1">
            ({neo.missDistLunar.toFixed(2)} LD)
          </span>
        </span>

        <span className="text-gray-500">Velocity</span>
        <span>{neo.velocityKmS.toFixed(2)} km/s</span>

        <span className="text-gray-500">Approach</span>
        <span>{neo.approachDate.toLocaleDateString()}</span>

        <span className="text-gray-500">Miss dist AU</span>
        <span>{(neo.missDistKm / KM_PER_AU).toFixed(4)} AU</span>
      </div>

      {neo.hazardous && (
        <div
          className="text-xs font-medium"
          style={{ color: "#FF4422" }}
          role="alert"
        >
          ◆ Potentially hazardous asteroid
        </div>
      )}

      <div className="flex gap-2 mt-1">
        <a
          href={jplUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-xs py-1.5 rounded bg-white/10 hover:bg-white/20 transition-colors"
          aria-label={`Open JPL Small-Body Database entry for ${neo.name}`}
        >
          JPL ↗
        </a>
        <button
          onClick={handleExport}
          className="flex-1 text-xs py-1.5 rounded bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Copy kNN query snippet to clipboard"
        >
          {copied ? "Copied ✓" : "Export"}
        </button>
      </div>
    </div>
  );
}
