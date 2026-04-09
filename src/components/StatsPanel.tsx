import { useEffect, useRef, useState } from "react";
import type { IndexManager } from "../core/indexManager";
import type { SolarSystemScene } from "./SolarSystemScene";
import type { BonsaiStats, QueryState } from "../core/types";
import {
  BONSAI_BACKEND_NAMES,
  BONSAI_COST_MODEL,
  BONSAI_GITHUB_URL,
  BONSAI_TOAST_DURATION_MS,
  INFO_PANEL_COPY_RESET_MS,
} from "../core/constants";
import {
  generateRustSnippet,
  generatePythonSnippet,
  generateJSSnippet,
} from "../core/exportSnippets";

interface StatsPanelProps {
  indexManager: IndexManager;
  scene: SolarSystemScene | null;
  currentQuery: QueryState;
}

interface Toast {
  id: number;
  message: string;
}

type Language = "rust" | "python" | "js";

const LANG_LABELS: Record<Language, string> = {
  rust: "Rust",
  python: "Python",
  js: "JS",
};

function generateSnippet(query: QueryState, lang: Language): string {
  if (lang === "rust") return generateRustSnippet(query);
  if (lang === "python") return generatePythonSnippet(query);
  return generateJSSnippet(query);
}

export default function StatsPanel({
  indexManager,
  scene,
  currentQuery,
}: StatsPanelProps) {
  const [stats, setStats] = useState<BonsaiStats>(() => indexManager.stats());
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [lang, setLang] = useState<Language>("rust");
  const [copied, setCopied] = useState(false);

  const wasMigratingRef = useRef(false);
  const toastSeqRef = useRef(0);
  // Tracks all active toast dismiss timers so they can be cleared on unmount.
  const toastTimersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setStats(() => {
        const next = indexManager.stats();
        const wasMigrating = wasMigratingRef.current;
        wasMigratingRef.current = next.migrating;

        if (wasMigrating && !next.migrating) {
          scene?.flashMigration();
          const name = BONSAI_BACKEND_NAMES[next.backend_kind] ?? "Unknown";
          const toastId = ++toastSeqRef.current;
          const toast: Toast = {
            id: toastId,
            message: `Index restructured → ${name}`,
          };
          setToasts((ts) => [...ts, toast]);
          const timer = setTimeout(() => {
            setToasts((ts) => ts.filter((t) => t.id !== toastId));
          }, BONSAI_TOAST_DURATION_MS);
          toastTimersRef.current.push(timer);
        }

        return next;
      });
    }, 500);

    return () => {
      clearInterval(id);
      // Clear any pending toast dismiss timers.
      toastTimersRef.current.forEach(clearTimeout);
      toastTimersRef.current = [];
    };
  }, [indexManager, scene]);

  // Clear copy timeout on unmount.
  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current !== null) clearTimeout(copyTimeoutRef.current);
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(generateSnippet(currentQuery, lang));
      setCopied(true);
      if (copyTimeoutRef.current !== null) clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = setTimeout(
        () => setCopied(false),
        INFO_PANEL_COPY_RESET_MS,
      );
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  const backendName = BONSAI_BACKEND_NAMES[stats.backend_kind] ?? "Unknown";
  const costModel = BONSAI_COST_MODEL[stats.backend_kind];
  const snippet = generateSnippet(currentQuery, lang);

  return (
    <>
      <div
        className="bg-black/80 border border-white/10 text-white text-xs rounded-lg w-full sm:w-72 flex flex-col overflow-hidden"
        aria-label="Bonsai index statistics and export"
      >
        <span className="sr-only" role="status" aria-live="polite">
          {stats.migrating ? "Index migration in progress" : ""}
        </span>

        {/* Stats section */}
        <div className="px-3 py-2 flex flex-col gap-1">
          <a
            href={BONSAI_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-xs uppercase tracking-wide mb-0.5 hover:text-[#00FF88] transition-colors"
          >
            Bonsai Index ↗
          </a>
          <Row label="Backend">
            <span className="font-semibold text-[#00FF88]">{backendName}</span>
          </Row>
          <Row label="Points">{stats.point_count.toLocaleString()}</Row>
          <Row label="Migrations">{stats.migration_count}</Row>
          <Row label="Queries">{stats.query_count.toLocaleString()}</Row>

          {stats.migrating && (
            <div className="flex items-center gap-1 text-yellow-400 mt-0.5">
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

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Export section */}
        <div className="px-3 py-2 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col">
              <span className="text-gray-400 text-xs uppercase tracking-wide">
                Export
              </span>
              <span className="text-[#00FF88]/70 text-[10px]">
                Bonsai query
              </span>
            </div>
            <div
              className="flex gap-1"
              role="group"
              aria-label="Select language"
            >
              {(["rust", "python", "js"] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-0.5 rounded text-xs transition-colors ${
                    lang === l
                      ? "bg-[#00FF88]/20 text-[#00FF88] border border-[#00FF88]/50"
                      : "bg-white/10 text-gray-400 hover:bg-white/20"
                  }`}
                  aria-pressed={lang === l}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>
          </div>

          <pre className="bg-black/60 rounded p-2 text-[10px] leading-relaxed text-gray-200 overflow-x-auto whitespace-pre min-h-[80px]">
            {snippet}
          </pre>

          <button
            onClick={handleCopy}
            className="w-full py-1.5 rounded bg-white/10 hover:bg-white/20 transition-colors text-xs"
            aria-label="Copy snippet to clipboard"
          >
            {copied ? "Copied ✓" : "Copy to clipboard"}
          </button>
        </div>
      </div>

      {/* Toast notifications */}
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
