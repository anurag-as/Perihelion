import { useRef, type ChangeEvent } from "react";
import { MS_PER_DAY, SCRUBBER_FETCH_WINDOW_DAYS } from "../core/constants";

const SCRUBBER_DAYS = SCRUBBER_FETCH_WINDOW_DAYS / 2;

interface TimeScrubberProps {
  date: Date;
  onChange: (date: Date) => void;
  isLoading?: boolean;
}

export default function TimeScrubber({
  date,
  onChange,
  isLoading = false,
}: TimeScrubberProps) {
  // Stable reference to "today at midnight" — recomputed only once per mount.
  const todayRef = useRef<Date | null>(null);
  if (!todayRef.current) {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    todayRef.current = d;
  }
  const today = todayRef.current;

  const offsetDays = Math.round(
    (date.getTime() - today.getTime()) / MS_PER_DAY,
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const days = parseInt(e.target.value, 10);
    const newDate = new Date(today.getTime() + days * MS_PER_DAY);
    onChange(newDate);
  }

  const label =
    offsetDays === 0
      ? "Today"
      : offsetDays > 0
        ? `+${offsetDays}d`
        : `${offsetDays}d`;

  return (
    <div className="flex flex-col gap-1 bg-black/60 text-white rounded-lg px-3 py-2 min-w-[180px]">
      <div className="flex justify-between text-xs text-gray-300">
        <span>Time</span>
        <span className="flex items-center gap-1">
          {isLoading && (
            <span
              className="inline-block animate-spin text-[#00FF88]"
              aria-hidden="true"
            >
              ⟳
            </span>
          )}
          <span>{label}</span>
        </span>
      </div>
      <input
        type="range"
        min={-SCRUBBER_DAYS}
        max={SCRUBBER_DAYS}
        step={1}
        value={offsetDays}
        onChange={handleChange}
        className="w-full accent-[#00FF88]"
        aria-label="Time offset in days from today (±30 days)"
        disabled={isLoading}
      />
      <div className="text-xs text-gray-400 flex justify-between">
        <span>−{SCRUBBER_DAYS}d</span>
        <span>+{SCRUBBER_DAYS}d</span>
      </div>
    </div>
  );
}
