"use client";

import { Card } from "@/components/ui/Card";
import { authProviders } from "@/lib/auth/config";
import { keyraEsimUrl, keyraGetStartedUrl } from "@/lib/keyraAppUrls";

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
            if (p.id === "keyra") {
              const returnUrl = `${keyraEsimUrl()}/login?keyra_session=1`;
              const href = `${keyraGetStartedUrl()}/?return=${encodeURIComponent(returnUrl)}`;

              // Prefer popup so get-started can postMessage back to this window.
              const popup = window.open(
                href,
                "keyra_get_started_login",
                "popup=yes,width=520,height=760,noopener",
              );
              if (!popup) {
                // Popup blocked — fall back to full redirect.
                window.location.href = href;
              }
              return;
            }
            if (p.id === "device_bound") {
              fetch("/api/auth/device-bound", { method: "POST", body: "{}" });
              return;
            }
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
