import { useState, useEffect } from "react";
import type { FetchStatus } from "../core/dataFetcher";

interface CachedDataBannerProps {
  status: FetchStatus;
}

export default function CachedDataBanner({ status }: CachedDataBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  // Re-show if status changes (e.g. new fetch fails after a live one)
  useEffect(() => {
    if (status !== "live") setDismissed(false);
  }, [status]);

  if (status === "live" || dismissed) return null;

  const message =
    status === "rate-limited"
      ? "Rate limit reached — using cached data"
      : "Using cached data";

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-yellow-600/90 px-4 py-2 text-sm font-medium text-white"
    >
      <span>{message}</span>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss banner"
        className="absolute right-4 text-white/80 hover:text-white transition-colors text-lg leading-none"
      >
        ×
      </button>
    </div>
  );
}
