import { useEffect, useRef, useState } from "react";
import type { IndexManager } from "../core/indexManager";
import type { SolarSystemScene } from "./SolarSystemScene";
import type { BonsaiStats } from "../core/types";
import { BONSAI_BACKEND_NAMES, BONSAI_COST_MODEL } from "../core/constants";

interface StatsPanelProps {
  indexManager: IndexManager;
  scene: SolarSystemScene | null;
}

interface Toast {
  id: number;
  message: string;
}

let toastSeq = 0;

export default function StatsPanel({ indexManager, scene }: StatsPanelProps) {
  const [stats, setStats] = useState<BonsaiStats>(() => indexManager.stats());
  const [toasts, setToasts] = useState<Toast[]>([]);
  const wasMigratingRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setStats((_prev) => {
        const next = indexManager.stats();
        const wasMigrating = wasMigratingRef.current;
        wasMigratingRef.current = next.migrating;

        // Migration just completed: flash scene and show toast.
        if (wasMigrating && !next.migrating) {
          scene?.flashMigration();
          const name = BONSAI_BACKEND_NAMES[next.backend_kind] ?? "Unknown";
          const toast: Toast = {
            id: ++toastSeq,
            message: `Index restructured → ${name}`,
          };
          setToasts((ts) => [...ts, toast]);
          setTimeout(() => {
            setToasts((ts) => ts.filter((t) => t.id !== toast.id));
          }, 3000);
        }

        return next;
      });
    }, 500);
    return () => clearInterval(id);
  }, [indexManager, scene]);

  const backendName = BONSAI_BACKEND_NAMES[stats.backend_kind] ?? "Unknown";
  const costModel = BONSAI_COST_MODEL[stats.backend_kind];

  return (
    <>
      <div
        className="bg-black/80 border border-white/10 text-white text-xs rounded-lg px-3 py-2 min-w-[200px] flex flex-col gap-1"
        aria-label="Bonsai index statistics"
      >
        {/* Persistent live region — always mounted so screen readers catch transitions */}
        <span className="sr-only" role="status" aria-live="polite">
          {stats.migrating ? "Index migration in progress" : ""}
        </span>

        <Row label="Backend">
          <span className="font-semibold text-[#00FF88]">{backendName}</span>
        </Row>
        <Row label="Points">{stats.point_count.toLocaleString()}</Row>
        <Row label="Migrations">{stats.migration_count}</Row>
        <Row label="Queries">{stats.query_count.toLocaleString()}</Row>

        {stats.migrating && (
          <div className="flex items-center gap-1 text-yellow-400">
            <span className="inline-block animate-spin">⟳</span>
            <span>Migrating…</span>
          </div>
        )}

        {costModel && (
          <p className="mt-1 pt-1 border-t border-white/10 text-gray-400 leading-tight">
            {costModel}
          </p>
        )}
      </div>

      {/* Toast notifications — rendered outside the stats box */}
      <div className="flex flex-col gap-1 items-end pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            aria-live="polite"
            className="bg-[#00ffcc]/20 border border-[#00ffcc]/50 text-[#00ffcc] text-xs rounded-lg px-3 py-1.5 animate-pulse"
          >
            {t.message}
          </div>
        ))}
      </div>
    </>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-gray-400">{label}</span>
      <span>{children}</span>
    </div>
  );
}
