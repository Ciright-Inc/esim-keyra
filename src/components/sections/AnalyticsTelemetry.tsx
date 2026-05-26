import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { analyticsMetrics } from "@/lib/esim-data";

export function AnalyticsTelemetry() {
  return (
    <Section
      id="analytics"
      eyebrow="Telemetry"
      title="Analytics & Telemetry"
      description="Admin-ready architecture for activation, region, carrier, API usage, device trust scores, and fraud indicators."
      band="soft"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {analyticsMetrics.map((m) => (
          <Card key={m.label} hover={false}>
            <div className="mb-3 h-8 w-full overflow-hidden rounded-[var(--ds-radius-md)] bg-[var(--ds-surface-strong)]">
              <div className="h-full w-2/3 bg-[var(--ds-hairline-strong)]" />
            </div>
            <h3 className="ds-title-md text-base">{m.label}</h3>
            <p className="ds-body-sm mt-1">{m.desc}</p>
          </Card>
        ))}
      </div>
      <p className="ds-body-sm mt-10 text-center">
        CMS modules: customer analytics · fraud monitoring · audit logging
      </p>
    </Section>
  );
}
