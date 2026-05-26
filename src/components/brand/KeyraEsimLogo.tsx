import Link from "next/link";
import { cn } from "@/lib/utils";

type KeyraEsimLogoProps = {
  className?: string;
  showSub?: boolean;
};

/** Proprietary wordmark — no external copyrighted assets */
export function KeyraEsimLogo({ className, showSub = true }: KeyraEsimLogoProps) {
  return (
    <Link href="/" className={cn("inline-flex flex-col gap-0.5", className)}>
      <span className="flex items-center gap-2">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--esim-border)] bg-[var(--esim-surface-elevated)]"
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--esim-accent)]">
            <circle
              cx="12"
              cy="12"
              r="9"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
            />
            <path
              d="M12 7v5l3 2"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="esim-display text-lg font-semibold tracking-tight text-[var(--esim-text)]">
          KEYRA
        </span>
      </span>
      {showSub ? (
        <span className="pl-11 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--esim-text-secondary)]">
          eSIM
        </span>
      ) : null}
    </Link>
  );
}
