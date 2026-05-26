import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { enterpriseFeatures } from "@/lib/esim-data";

export function EnterprisePlatform() {
  return (
    <Section
      id="enterprise"
      eyebrow="Enterprise"
      title="Enterprise Platform"
      description="Fleet management, provisioning console, remote activation, API integrations, telecom analytics, and policy controls."
      band="soft"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <Card hover={false} className="overflow-hidden !p-0">
          <div className="border-b border-[var(--ds-hairline-strong)] p-4 md:p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="ds-body-sm">Provisioning Console</span>
              <span className="ds-badge-pill text-[var(--ds-success)]">Live preview</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["Fleet", "Policies", "Audit"].map((tab) => (
                <div
                  key={tab}
                  className="rounded-[var(--ds-radius-md)] border border-[var(--ds-hairline-strong)] bg-[var(--ds-canvas-soft)] p-3 text-center text-xs"
                >
                  {tab}
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              {[1, 2, 3, 4].map((row) => (
                <div
                  key={row}
                  className="flex items-center gap-3 rounded-[var(--ds-radius-md)] border border-[var(--ds-hairline)] px-3 py-2"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--ds-ink)]" />
                  <span className="h-2 flex-1 rounded-sm bg-[var(--ds-hairline)]" />
                  <span className="ds-caption-uppercase text-[var(--ds-success)]">OK</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
        <div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {enterpriseFeatures.map((f) => (
              <li
                key={f}
                className="ds-body-sm flex items-center gap-2 rounded-[var(--ds-radius-lg)] border border-[var(--ds-hairline-strong)] bg-[var(--ds-surface-card)] px-4 py-3"
              >
                <span className="text-[var(--ds-text-link)]">◆</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/enterprise">Request enterprise access</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
