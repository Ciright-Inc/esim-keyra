import { notFound } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { cmsModules } from "@/lib/cms/placeholder-store";

type Props = { params: Promise<{ module: string }> };

const titles: Record<string, string> = {
  "carrier-management": "Carrier management",
  "country-management": "Country management",
  "plan-management": "Plan management",
  "esim-inventory": "eSIM inventory",
  "provisioning-apis": "Provisioning APIs",
  "customer-analytics": "Customer analytics",
  "fraud-monitoring": "Fraud monitoring",
  "support-tickets": "Support tickets",
  "enterprise-onboarding": "Enterprise onboarding",
  "audit-logging": "Audit logging",
};

export default async function AdminModulePage({ params }: Props) {
  const { module } = await params;
  if (!(cmsModules as readonly string[]).includes(module)) {
    notFound();
  }

  return (
    <Card hover={false}>
      <h2 className="ds-title-md">{titles[module] ?? module}</h2>
      <p className="ds-body-sm mt-4">
        CMS module placeholder. Wire to database, KEYRA admin auth, and{" "}
        <code className="rounded-[var(--ds-radius-xs)] bg-[var(--ds-surface-strong)] px-1 text-xs">
          /api/v1
        </code>{" "}
        or standalone backend at port 4040.
      </p>
      <ul className="ds-body-sm mt-6 space-y-2">
        <li>• List / create / update records</li>
        <li>• Role-based permissions (enterprise)</li>
        <li>• Audit trail on mutations</li>
      </ul>
    </Card>
  );
}
