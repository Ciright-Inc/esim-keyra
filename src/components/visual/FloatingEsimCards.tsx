"use client";

import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

const cards = [
  { x: "72%", y: "18%" },
  { x: "78%", y: "42%" },
  { x: "68%", y: "58%" },
];

export function FloatingEsimCards() {
  const reduce = useHydratedReducedMotion();
  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
      {cards.map((c) => (
        <div
          key={`${c.x}-${c.y}`}
          className="ds-feature-card is-static absolute w-36 p-3"
          style={{ left: c.x, top: c.y }}
        >
          <div className="mb-2 h-1 w-8 rounded-sm bg-[var(--ds-ink)] opacity-40" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded-sm bg-[var(--ds-hairline)]" />
            <div className="h-1.5 w-4/5 rounded-sm bg-[var(--ds-hairline)]" />
          </div>
          <p className="ds-caption-uppercase mt-3 text-[var(--ds-success)]">Verified</p>
        </div>
      ))}
    </div>
  );
}
