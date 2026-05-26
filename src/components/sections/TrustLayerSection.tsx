import { Section } from "@/components/ui/Section";
import { TrustArchitectureDiagram } from "@/components/visual/TrustArchitectureDiagram";

export function TrustLayerSection() {
  return (
    <Section
      id="trust"
      eyebrow="KEYRA Trust Layer"
      title="The future of connectivity is verified."
      description="Traditional eSIM providers authenticate devices. KEYRA authenticates the device, the user, the application, the transaction, and the consent layer."
    >
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <TrustArchitectureDiagram />
        <div className="space-y-6">
          <p className="ds-body-md">
            Deterministic identity architecture binds every provisioning event to
            verified sessions — hardware-rooted where required, consent-first
            everywhere.
          </p>
          <ul className="space-y-3">
            {[
              "Device attestation & SIM-bound identity",
              "User + application session verification",
              "Transaction-level trust signals",
              "Consent layer enforced at provision time",
            ].map((item) => (
              <li key={item} className="ds-body-sm flex gap-3 text-[var(--ds-ink)]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ds-success)]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="ds-body-sm font-medium text-[var(--ds-text-link)]">
            Secondary positioning: The Identity Layer for Connected Devices
          </p>
        </div>
      </div>
    </Section>
  );
}
