"use client";

import { useMemo } from "react";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";
import {
  COVERAGE_HUBS,
  COVERAGE_ROUTES,
  MAP_H,
  MAP_W,
  buildLandDotGrid,
  hubById,
  projectLatLng,
} from "@/lib/coverageMapData";

function arcPath(
  from: { x: number; y: number },
  to: { x: number; y: number },
  bend = 1,
): string {
  const midX = (from.x + to.x) / 2;
  const midY = Math.min(from.y, to.y) - 36 * bend - Math.abs(from.x - to.x) * 0.04;
  return `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
}

export function WorldCoverageVisualization() {
  const reduce = useHydratedReducedMotion();

  const landDots = useMemo(() => buildLandDotGrid(), []);
  const hubs = useMemo(
    () =>
      COVERAGE_HUBS.map((hub) => ({
        ...hub,
        ...projectLatLng(hub.lat, hub.lng),
      })),
    [],
  );

  const routes = useMemo(() => {
    return COVERAGE_ROUTES.map(([fromId, toId], index) => {
      const fromHub = hubById(fromId);
      const toHub = hubById(toId);
      if (!fromHub || !toHub) return null;
      const from = projectLatLng(fromHub.lat, fromHub.lng);
      const to = projectLatLng(toHub.lat, toHub.lng);
      return { id: `${fromId}-${toId}`, d: arcPath(from, to, 1 + (index % 3) * 0.08), index };
    }).filter(Boolean) as Array<{ id: string; d: string; index: number }>;
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-[var(--ds-radius-md)] bg-[var(--ds-canvas-soft)]">
      <svg
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        role="img"
        aria-label="Global carrier coverage map with roaming paths between regions"
        className="block h-auto w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect width={MAP_W} height={MAP_H} fill="var(--ds-canvas-soft)" />

        {/* Graticule */}
        {[160, 280, 400, 520, 640, 760, 880].map((x) => (
          <line
            key={`gx-${x}`}
            x1={x}
            y1={32}
            x2={x}
            y2={468}
            stroke="var(--ds-hairline-strong)"
            strokeWidth="0.5"
            opacity="0.35"
          />
        ))}
        {[100, 180, 260, 340, 420].map((y) => (
          <line
            key={`gy-${y}`}
            x1={48}
            y1={y}
            x2={952}
            y2={y}
            stroke="var(--ds-hairline-strong)"
            strokeWidth="0.5"
            opacity="0.35"
          />
        ))}

        {/* Land mass — editorial dot matrix */}
        {landDots.map((dot, i) => (
          <circle
            key={`land-${i}`}
            cx={dot.x}
            cy={dot.y}
            r={1.15}
            fill="var(--ds-ink)"
            opacity={0.14}
          />
        ))}

        {/* Roaming arcs */}
        {routes.map((route) => (
          <path
            key={route.id}
            d={route.d}
            fill="none"
            stroke="var(--ds-ink)"
            strokeWidth="1"
            strokeOpacity={0.22}
            strokeDasharray={reduce ? "4 6" : "5 7"}
            className={reduce ? undefined : "coverage-route-arc"}
            style={{ animationDelay: `${route.index * 0.12}s` }}
          />
        ))}

        {/* Carrier hub nodes */}
        {hubs.map((hub) => (
          <g key={hub.id}>
            {!reduce ? (
              <circle
                cx={hub.x}
                cy={hub.y}
                r={hub.tier === "primary" ? 14 : 11}
                fill="none"
                stroke="var(--ds-success)"
                strokeWidth="1"
                opacity="0.35"
                className="coverage-hub-pulse"
              />
            ) : null}
            <circle
              cx={hub.x}
              cy={hub.y}
              r={hub.tier === "primary" ? 9 : 7}
              fill="var(--ds-surface-card)"
              stroke="var(--ds-ink)"
              strokeWidth="1.25"
            />
            <circle
              cx={hub.x}
              cy={hub.y}
              r={hub.tier === "primary" ? 3.2 : 2.5}
              fill="var(--ds-success)"
            />
          </g>
        ))}
      </svg>

      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-[var(--ds-hairline-strong)] bg-[var(--ds-surface-card)] px-4 py-3">
        <span className="flex items-center gap-2 text-[11px] text-[var(--ds-body)]">
          <span className="inline-flex size-2.5 rounded-full bg-[var(--ds-success)] ring-2 ring-[var(--ds-surface-card)] ring-offset-1 ring-offset-[var(--ds-canvas-soft)]" />
          Carrier nodes
        </span>
        <span className="flex items-center gap-2 text-[11px] text-[var(--ds-body)]">
          <span className="inline-block h-px w-5 border-t border-dashed border-[var(--ds-ink)] opacity-40" />
          Roaming paths
        </span>
        <span className="flex items-center gap-2 text-[11px] text-[var(--ds-body)]">
          <span className="inline-block size-1.5 rounded-full bg-[var(--ds-ink)] opacity-20" />
          Coverage footprint
        </span>
      </div>
    </div>
  );
}
