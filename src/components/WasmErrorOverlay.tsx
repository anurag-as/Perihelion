interface WasmErrorOverlayProps {
  onRetry: () => void;
}

export default function WasmErrorOverlay({ onRetry }: WasmErrorOverlayProps) {
  return (
    <div
      className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-black/80 border border-yellow-500/60 text-white rounded-lg px-4 py-3 max-w-sm w-full mx-4 flex flex-col gap-2"
      role="alert"
      aria-live="assertive"
    >
      <p className="text-sm text-yellow-300 font-semibold">
        Spatial index unavailable — 3D scene will load without query features.
      </p>
      <button
        onClick={onRetry}
        className="self-start text-xs bg-yellow-500/20 hover:bg-yellow-500/40 border border-yellow-500/50 text-yellow-300 rounded px-3 py-1 transition-colors"
        aria-label="Retry loading spatial index"
      >
        Retry
      </button>
    </div>
  );
}
