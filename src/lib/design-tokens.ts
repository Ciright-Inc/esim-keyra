/**
 * Design tokens — TypeScript mirror of `ds-system.css` / agent.md
 */
export const ds = {
  canvas: "var(--ds-canvas)",
  canvasSoft: "var(--ds-canvas-soft)",
  surfaceCard: "var(--ds-surface-card)",
  surfaceStrong: "var(--ds-surface-strong)",
  surfaceDark: "var(--ds-surface-dark)",
  hairline: "var(--ds-hairline)",
  hairlineStrong: "var(--ds-hairline-strong)",
  ink: "var(--ds-ink)",
  body: "var(--ds-body)",
  muted: "var(--ds-muted)",
  primary: "var(--ds-primary)",
  textLink: "var(--ds-text-link)",
  success: "var(--ds-success)",
  error: "var(--ds-error)",
  radiusMd: "var(--ds-radius-md)",
  radiusLg: "var(--ds-radius-lg)",
  shadowSoft: "var(--ds-shadow-soft)",
} as const;

export const pagePaddingX = "var(--ds-page-x)";
export const sectionPaddingY = "var(--ds-section-y)";
