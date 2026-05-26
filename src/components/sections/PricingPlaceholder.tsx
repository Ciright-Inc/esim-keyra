import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const tiers = [
  {
    name: "Individual",
    price: "From €9",
    desc: "Travel-ready profiles with identity session binding.",
    cta: "Get started",
    href: "/activate",
    variant: "primary" as const,
  },
  {
    name: "Business",
    price: "Custom",
    desc: "Team provisioning, policy controls, SSO-ready.",
    cta: "Get started",
    href: "/activate",
    variant: "secondary" as const,
  },
  {
    name: "Enterprise",
    price: "Contact",
    desc: "Fleet orchestration, APIs, compliance & audit.",
    cta: "Contact sales",
    href: "/enterprise",
    variant: "primary" as const,
  },
];

export function PricingPlaceholder() {
  return (
    <Section
      id="pricing"
      eyebrow="Plans"
      title="Pricing"
      description="Placeholder tiers — integrate with plan management CMS and carrier wholesale models."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <Card key={tier.name} hover={false} className="flex flex-col">
            <h3 className="ds-title-md">{tier.name}</h3>
            <p className="ds-display-md mt-4">{tier.price}</p>
            <p className="ds-body-sm mt-4 flex-1">{tier.desc}</p>
            <Button
              href={tier.href}
              variant={tier.variant}
              className="mt-8 w-full justify-center"
            >
              {tier.cta}
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
