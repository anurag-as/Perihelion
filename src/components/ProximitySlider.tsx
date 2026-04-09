import type { ChangeEvent } from "react";
import {
  PROXIMITY_MIN_AU,
  PROXIMITY_MAX_AU,
  PROXIMITY_SLIDER_STEP_AU,
} from "../core/constants";

export { PROXIMITY_MIN_AU, PROXIMITY_MAX_AU };

interface ProximitySliderProps {
  radiusAU: number;
  matchCount: number;
  onChange: (radiusAU: number) => void;
  disabled?: boolean;
}

export default function ProximitySlider({
  radiusAU,
  matchCount,
  onChange,
  disabled = false,
}: ProximitySliderProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(parseFloat(e.target.value));
  }

  return (
    <div
      className={`flex flex-col gap-1 bg-black/60 text-white rounded-lg px-3 py-2 w-full sm:min-w-[180px] ${disabled ? "opacity-40" : ""}`}
    >
      <div className="flex justify-between text-xs text-gray-300">
        <span>Proximity</span>
        <span>{radiusAU.toFixed(2)} AU</span>
      </div>
      <input
        type="range"
        min={PROXIMITY_MIN_AU}
        max={PROXIMITY_MAX_AU}
        step={PROXIMITY_SLIDER_STEP_AU}
        value={radiusAU}
        onChange={handleChange}
        disabled={disabled}
        className="w-full accent-[#00FF88] disabled:cursor-not-allowed"
        aria-label="Proximity radius in AU"
        aria-disabled={disabled}
      />
      <div className="text-xs text-[#00FF88] text-right">
        {matchCount} NEO{matchCount !== 1 ? "s" : ""} nearby
      </div>
    </div>
  );
}
