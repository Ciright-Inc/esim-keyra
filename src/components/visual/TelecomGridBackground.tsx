"use client";

import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

export function TelecomGridBackground() {
  const reduce = useHydratedReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 ds-telecom-grid opacity-60" />
      {!reduce ? (
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ background: "var(--ds-surface-strong)" }}
        />
      ) : null}
      {!reduce ? <WorldConnectivityLines /> : null}
    </div>
  );
}

function WorldConnectivityLines() {
  const lines = [
    "M 80 180 Q 400 120 720 200",
    "M 120 320 Q 380 280 680 340",
    "M 200 100 Q 500 200 800 140",
  ];

  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-20"
      viewBox="0 0 900 500"
      preserveAspectRatio="xMidYMid slice"
    >
      {lines.map((d) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="var(--ds-hairline-strong)"
          strokeWidth="1"
          strokeDasharray="6 8"
        />
      ))}
    </svg>
  );
}
