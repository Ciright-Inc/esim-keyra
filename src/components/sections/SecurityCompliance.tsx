import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { securityItems } from "@/lib/esim-data";

export function SecurityCompliance() {
  return (
    <Section
      id="security"
      eyebrow="Security"
      title="Trust must exist at the network layer."
      description="Sovereign, institutional, telecom-grade assurance — GSMA-ready architecture with zero-trust and consent-first design."
      band="soft"
    >
      <div className="ds-card-grid lg:grid-cols-4">
        {securityItems.map((item) => (
          <Card key={item.title} hover={false}>
            <h3 className="ds-title-md">{item.title}</h3>
            <p className="ds-body-sm mt-3">{item.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
