"use client";

import { Card } from "@/components/ui/Card";
import { authProviders } from "@/lib/auth/config";

export function AuthProviderButtons() {
  return (
    <div className="space-y-3">
      {authProviders.map((p) => (
        <Card
          key={p.id}
          as="button"
          hover={false}
          className="flex w-full items-center justify-between !py-4 text-left"
          onClick={() => {
            if (p.type === "oauth") window.location.href = "/api/auth/oauth";
            else if (p.type === "sim")
              fetch("/api/auth/device-bound", { method: "POST", body: "{}" });
          }}
        >
          <span className="ds-body-sm font-medium text-[var(--ds-ink)]">{p.label}</span>
          <span className="ds-caption-uppercase normal-case">{p.type}</span>
        </Card>
      ))}
      <p className="ds-body-sm text-center">
        Enterprise SSO · OAuth · SIM-bound auth placeholders
      </p>
    </div>
  );
}
