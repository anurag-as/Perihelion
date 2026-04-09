import type { LayerType } from "../core/types";

interface LayerControlsProps {
  onLayerToggle: (layer: LayerType, enabled: boolean) => void;
  onHazardFilter: (enabled: boolean) => void;
}

interface LayerEntry {
  layer: LayerType;
  label: string;
  isHazardFilter?: boolean;
}

const LAYER_ENTRIES: LayerEntry[] = [
  { layer: "planets", label: "Planets" },
  { layer: "trajectories", label: "Trajectories" },
  { layer: "meteors", label: "Meteors" },
  { layer: "hazardOnly", label: "Hazard Only", isHazardFilter: true },
];

export default function LayerControls({
  onLayerToggle,
  onHazardFilter,
}: LayerControlsProps) {
  function handleChange(entry: LayerEntry, checked: boolean) {
    if (entry.isHazardFilter) {
      onHazardFilter(checked);
    } else {
      onLayerToggle(entry.layer, checked);
    }
  }

  return (
    <div className="bg-black/60 text-white rounded-lg px-3 py-2 min-w-[160px]">
      <span className="text-xs font-semibold text-gray-300 block mb-2">
        Layers
      </span>
      <div className="flex flex-col gap-1">
        {LAYER_ENTRIES.map((entry) => (
          <label
            key={entry.layer}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <input
              type="checkbox"
              defaultChecked={entry.layer !== "hazardOnly"}
              onChange={(e) => handleChange(entry, e.target.checked)}
              className="accent-[#00FF88] w-3 h-3"
              aria-label={`Toggle ${entry.label} layer`}
            />
            <span className="text-xs text-gray-200">{entry.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
