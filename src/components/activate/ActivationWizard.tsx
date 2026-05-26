"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const steps = ["Device", "Identity", "Plan", "QR Install"];

export function ActivationWizard() {
  const [step, setStep] = useState(0);

  return (
    <div className="mx-auto max-w-lg">
      <ol className="mb-10 flex justify-between gap-2">
        {steps.map((label, i) => (
          <li
            key={label}
            className={cn(
              "flex-1 border-b-2 pb-2 text-center text-xs font-medium",
              i <= step
                ? "border-[var(--ds-ink)] text-[var(--ds-ink)]"
                : "border-[var(--ds-hairline)] text-[var(--ds-body)]",
            )}
          >
            {label}
          </li>
        ))}
      </ol>
      <Card hover={false}>
        {step === 0 && (
          <p className="ds-body-sm">
            Confirm device supports eUICC. Hardware attestation placeholder.
          </p>
        )}
        {step === 1 && (
          <p className="ds-body-sm">
            KEYRA OAuth / enterprise SSO — identity session binding placeholder.
          </p>
        )}
        {step === 2 && (
          <p className="ds-body-sm">
            Select regional plan. Consent toggles for roaming and analytics.
          </p>
        )}
        {step === 3 && (
          <div className="flex flex-col items-center gap-4">
            <div
              className="flex h-40 w-40 items-center justify-center rounded-[var(--ds-radius-lg)] border border-dashed border-[var(--ds-hairline-strong)] bg-[var(--ds-canvas-soft)] text-xs text-[var(--ds-body)]"
              aria-label="QR code placeholder"
            >
              QR Activation
            </div>
            <p className="ds-body-sm text-center">
              Scan to install profile — telecom provisioning API integration point.
            </p>
          </div>
        )}
        <div className="mt-8 flex gap-3">
          {step > 0 ? (
            <Button variant="secondary" onClick={() => setStep((s) => s - 1)}>
              Back
            </Button>
          ) : null}
          {step < steps.length - 1 ? (
            <Button onClick={() => setStep((s) => s + 1)}>Continue</Button>
          ) : (
            <Button onClick={() => setStep(0)}>Done (demo)</Button>
          )}
        </div>
      </Card>
    </div>
  );
}
