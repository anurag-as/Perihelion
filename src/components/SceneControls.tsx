import { useState } from "react";
import { NEO_LEGEND_ENTRIES } from "../core/constants";
import type { LayerType, NeoCategory } from "../core/types";

interface SceneControlsProps {
  activeCategories: Set<NeoCategory>;
  onCategoryToggle: (category: NeoCategory) => void;
  onLayerToggle: (layer: LayerType, enabled: boolean) => void;
  onHazardFilter: (enabled: boolean) => void;
}

interface LayerEntry {
  layer: LayerType;
  label: string;
  isHazardFilter?: boolean;
  defaultOn: boolean;
}

const LAYER_ENTRIES: LayerEntry[] = [
  { layer: "planets", label: "Planets", defaultOn: true },
  { layer: "meteors", label: "Meteor showers", defaultOn: true },
  { layer: "trajectories", label: "Trajectories", defaultOn: false },
  {
    layer: "hazardOnly",
    label: "Hazardous only",
    isHazardFilter: true,
    defaultOn: false,
  },
];

export default function SceneControls({
  activeCategories,
  onCategoryToggle,
  onLayerToggle,
  onHazardFilter,
}: SceneControlsProps) {
  const [collapsed, setCollapsed] = useState(false);

  if (collapsed) {
    return (
      <button
        onClick={() => setCollapsed(false)}
        className="bg-black/60 text-white text-xs px-3 py-1.5 rounded-lg w-full sm:w-auto"
        aria-label="Open scene controls"
      >
        Controls
      </button>
    );
  }

  function handleLayerChange(entry: LayerEntry, checked: boolean) {
    if (entry.isHazardFilter) {
      onHazardFilter(checked);
    } else {
      onLayerToggle(entry.layer, checked);
    }
  }

  return (
    <div className="bg-black/60 text-white rounded-lg px-3 py-2 w-full sm:min-w-[200px]">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
          Controls
        </span>
        <button
          onClick={() => setCollapsed(true)}
          className="text-gray-400 hover:text-white text-xs ml-4"
          aria-label="Collapse controls"
        >
          ✕
        </button>
      </div>

      {/* Scene layers */}
      <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
        Show
      </p>
      <div className="flex flex-col gap-1 mb-3">
        {LAYER_ENTRIES.map((entry) => (
          <label
            key={entry.layer}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <input
              type="checkbox"
              defaultChecked={entry.defaultOn}
              onChange={(e) => handleLayerChange(entry, e.target.checked)}
              className="accent-[#00FF88] w-3 h-3"
              aria-label={`Toggle ${entry.label}`}
            />
            <span className="text-xs text-gray-200">{entry.label}</span>
          </label>
        ))}
      </div>

      {/* NEO category filters */}
      <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
        Highlight by type
      </p>
      <div className="flex flex-col gap-0.5">
        {NEO_LEGEND_ENTRIES.map(({ category, color, label }) => {
          const active = activeCategories.has(category);
          return (
            <button
              key={category}
              onClick={() => onCategoryToggle(category)}
              className={`flex items-center gap-2 py-0.5 w-full text-left transition-opacity ${active ? "opacity-100" : "opacity-30"}`}
              aria-pressed={active}
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
          <span className="text-xs text-gray-400">Diamond = hazardous</span>
        </div>
      </div>
    </div>
  );
}
