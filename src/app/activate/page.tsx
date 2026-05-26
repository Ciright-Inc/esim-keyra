import type { Metadata } from "next";
import { ActivationWizard } from "@/components/activate/ActivationWizard";
import { EsimInstallMockup } from "@/components/activate/EsimInstallMockup";
import { PageShell } from "@/components/ui/PageShell";

export const metadata: Metadata = {
  title: "Activate eSIM",
  description: "Identity-aware eSIM activation wizard for KEYRA global connectivity.",
};

export default function ActivatePage() {
  return (
    <PageShell
      eyebrow="Activation"
      title="Activate your eSIM"
      description="QR install flow with device trust and KEYRA identity binding."
    >
      <EsimInstallMockup />
      <div className="mx-auto mt-20 max-w-3xl">
        <ActivationWizard />
      </div>
    </PageShell>
  );
}
