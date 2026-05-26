import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const paths: Record<string, ReactNode> = {
  globe: (
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2v16M4.93 4.93l14.14 14.14M2 12h20"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
  building: (
    <path
      d="M4 20V6l8-4 8 4v14H4zm4-6h8M8 14h2M14 14h2M8 10h2M14 10h2"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
  chip: (
    <path
      d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2M7 7h10v10H7V7z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
  api: (
    <path
      d="M8 12h8M6 8l-2 4 2 4M18 8l2 4-2 4M12 4v16"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
  shield: (
    <path
      d="M12 3l8 4v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
  device: (
    <path
      d="M8 4h8a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2zm4 14v1"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
  consent: (
    <path
      d="M6 12l3 3 9-9M4 6h16v12H4V6z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
  agent: (
    <path
      d="M12 4a4 4 0 014 4v1h2v6h-6v-6h2V8a2 2 0 00-4 0v1H8v6H4V9h2V8a4 4 0 014-4zm-2 14h4"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
  plane: (
    <path
      d="M3 12l18-6-6 18-3-7-9-5z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
  car: (
    <path
      d="M4 14h16l-2-6H6l-2 6zm2 4a2 2 0 104 0 2 2 0 00-4 0zm8 0a2 2 0 104 0 2 2 0 00-4 0z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
  city: (
    <path
      d="M4 20V10h4v10M10 20V6h4v14M16 20v-8h4v8M4 20h16"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
  users: (
    <path
      d="M16 18v-1a4 4 0 00-8 0v1M12 12a3 3 0 100-6 3 3 0 000 6zM20 18v-1a3 3 0 00-2-2.83M4 18v-1a3 3 0 012-2.83"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
  event: (
    <path
      d="M6 4v2M18 4v2M4 8h16M6 12h4v6H6v-6zm8 0h4v6h-4v-6z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
  ticket: (
    <path
      d="M4 8h16v8H4V8zm4 0v8M16 10v4"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
  tower: (
    <path
      d="M12 3v18M8 7l4-4 4 4M6 20h12"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
};

type EsimIconProps = {
  name: string;
  className?: string;
};

export function EsimIcon({ name, className }: EsimIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-6 w-6 text-[var(--ds-text-link)]", className)}
      aria-hidden
    >
      {paths[name] ?? paths.globe}
    </svg>
  );
}
