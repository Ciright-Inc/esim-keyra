"use client";

import { Card } from "@/components/ui/Card";

const steps = [
  { label: "Scan QR", desc: "Camera opens secure provisioning URL" },
  { label: "Add cellular plan", desc: "iOS / Android eSIM install sheet" },
  { label: "Verify identity", desc: "KEYRA binds session to profile" },
  { label: "Connected", desc: "Carrier network · verified session" },
];

export function EsimInstallMockup() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className="relative mx-auto w-full max-w-xs">
        <Card hover={false} className="overflow-hidden !p-3">
          <div className="rounded-[var(--ds-radius-lg)] bg-[var(--ds-canvas-soft)] p-4">
            <div className="mb-4 flex justify-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-[var(--ds-radius-md)] border border-dashed border-[var(--ds-hairline-strong)] bg-[var(--ds-surface-card)] text-[10px] text-[var(--ds-body)]">
                QR
              </div>
            </div>
            <p className="ds-body-sm text-center font-medium">Add eSIM Cellular Plan</p>
            <p className="ds-caption-uppercase mt-1 text-center text-[var(--ds-success)]">
              KEYRA Verified
            </p>
            <div className="mt-4 flex justify-center">
              <span className="ds-btn-primary is-sm pointer-events-none">Install</span>
            </div>
          </div>
        </Card>
      </div>
      <ol className="space-y-4">
        {steps.map((s, i) => (
          <li key={s.label}>
            <Card hover={false} className="flex gap-4 !py-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--ds-hairline-strong)] text-sm font-semibold">
                {i + 1}
              </span>
              <div>
                <p className="ds-body-sm font-medium text-[var(--ds-ink)]">{s.label}</p>
                <p className="ds-body-sm mt-1">{s.desc}</p>
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </div>
  );
}
