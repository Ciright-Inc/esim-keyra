import type { Metadata } from "next";
import { EnterpriseForm } from "@/components/enterprise/EnterpriseForm";
import { PageShell } from "@/components/ui/PageShell";

export const metadata: Metadata = {
  title: "Enterprise Platform",
  description:
    "Fleet provisioning, telecom orchestration, and enterprise-grade eSIM for KEYRA.",
};

export default function EnterprisePage() {
  return (
    <PageShell
      eyebrow="Enterprise"
      title="Enterprise Platform"
      description="Bulk provisioning, audit trails, RBAC, and carrier-ready integrations."
    >
      <EnterpriseForm />
    </PageShell>
  );
}
