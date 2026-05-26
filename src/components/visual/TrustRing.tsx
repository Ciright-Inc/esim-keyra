"use client";

import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

export function TrustRing({ className = "" }: { className?: string }) {
  const reduce = useHydratedReducedMotion();

  return (
    <div className={`relative ${className}`} aria-hidden>
      <svg viewBox="0 0 120 120" className="h-28 w-28 md:h-36 md:w-36">
        <circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke="var(--ds-hairline-strong)"
          strokeWidth="1"
        />
        <circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke="var(--ds-success)"
          strokeWidth="2"
          strokeDasharray={reduce ? "120 200" : "80 240"}
          strokeLinecap="round"
        />
        <circle
          cx="60"
          cy="60"
          r="36"
          fill="none"
          stroke="var(--ds-ink)"
          strokeWidth="1"
          opacity="0.25"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="h-2 w-2 rounded-full bg-[var(--ds-success)]" />
      </span>
    </div>
  );
}
