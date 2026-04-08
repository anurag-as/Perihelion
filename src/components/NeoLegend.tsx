import { useState } from "react";
import {
  KM_PER_AU,
  NEO_LEGEND_ENTRIES,
  PROXIMITY_CLOSE_AU,
  PROXIMITY_MID_AU,
} from "../core/constants";
import type { NeoCategory, NeoData } from "../core/types";

export type { NeoCategory };

export const ALL_CATEGORIES: NeoCategory[] = [
  "hazardous",
  "close005",
  "close010",
  "far",
];

export function neoCategory(neo: NeoData): NeoCategory {
  if (neo.hazardous) return "hazardous";
  const distAU = neo.missDistKm / KM_PER_AU;
  if (distAU <= PROXIMITY_CLOSE_AU) return "close005";
  if (distAU <= PROXIMITY_MID_AU) return "close010";
  return "far";
}

interface NeoLegendProps {
  activeCategories: Set<NeoCategory>;
  onToggle: (category: NeoCategory) => void;
}

export default function NeoLegend({
  activeCategories,
  onToggle,
}: NeoLegendProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return (
      <button
        onClick={() => setVisible(true)}
        className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded"
      >
        Legend
      </button>
    );
  }

  return (
    <div className="absolute top-4 right-4 bg-black/60 text-white rounded-lg px-3 py-2 min-w-[200px]">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-semibold text-gray-300">NEO Colours</span>
        <button
          onClick={() => setVisible(false)}
          className="text-gray-400 hover:text-white text-xs ml-4"
          aria-label="Dismiss legend"
        >
          ✕
        </button>
      </div>
      {NEO_LEGEND_ENTRIES.map(({ category, color, label }) => {
        const active = activeCategories.has(category);
        return (
          <button
            key={category}
            onClick={() => onToggle(category)}
            className={`flex items-center gap-2 py-0.5 w-full text-left transition-opacity ${active ? "opacity-100" : "opacity-30"}`}
          >
            <span
              className="inline-block w-3 h-3 rounded-sm flex-shrink-0"
              style={{ backgroundColor: color }}
            />
            <span className="text-xs text-gray-200">{label}</span>
          </button>
        );
      })}
      <div className="flex items-center gap-2 py-0.5 mt-1 border-t border-white/10 pt-1">
        <span className="inline-block w-3 h-3 flex-shrink-0 border border-[#FF4422] rotate-45" />
        <span className="text-xs text-gray-400">
          Diamond = hazardous marker
        </span>
      </div>
    </div>
  );
}
