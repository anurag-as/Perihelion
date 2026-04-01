import type { FetchStatus } from "../core/dataFetcher";

interface CachedDataBannerProps {
  status: FetchStatus;
}

export default function CachedDataBanner({ status }: CachedDataBannerProps) {
  if (status === "live") return null;

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
      {message}
    </div>
  );
}
