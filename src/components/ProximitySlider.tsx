import type { ChangeEvent } from "react";

export const PROXIMITY_MIN_AU = 0.01;
export const PROXIMITY_MAX_AU = 0.5;
const STEP_AU = 0.01;

interface ProximitySliderProps {
  radiusAU: number;
  matchCount: number;
  onChange: (radiusAU: number) => void;
}

export default function ProximitySlider({
  radiusAU,
  matchCount,
  onChange,
}: ProximitySliderProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(parseFloat(e.target.value));
  }

  return (
    <div className="flex flex-col gap-1 bg-black/60 text-white rounded-lg px-3 py-2 min-w-[180px]">
      <div className="flex justify-between text-xs text-gray-300">
        <span>Proximity</span>
        <span>{radiusAU.toFixed(2)} AU</span>
      </div>
      <input
        type="range"
        min={PROXIMITY_MIN_AU}
        max={PROXIMITY_MAX_AU}
        step={STEP_AU}
        value={radiusAU}
        onChange={handleChange}
        className="w-full accent-[#00FF88]"
        aria-label="Proximity radius in AU"
      />
      <div className="text-xs text-[#00FF88] text-right">
        {matchCount} NEO{matchCount !== 1 ? "s" : ""} nearby
      </div>
    </div>
  );
}
