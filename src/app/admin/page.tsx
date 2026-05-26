import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { cmsModules } from "@/lib/cms/placeholder-store";

export default function AdminOverviewPage() {
  return (
    <div>
      <h2 className="ds-title-md text-base">Dashboard</h2>
      <p className="ds-body-sm mt-2">
        Admin-ready modules for carrier, country, plan, inventory, analytics, fraud, support, and audit.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {cmsModules.map((mod) => (
          <Link key={mod} href={`/admin/${mod}`}>
            <Card hover className="capitalize">
              {mod.replace(/-/g, " ")}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
