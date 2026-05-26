import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <PageShell title="Terms of Service">
      <div className="mx-auto max-w-3xl">
        <p className="ds-body-md">
          Placeholder terms for KEYRA eSIM connectivity services. Integrate with
          institutional legal CMS.
        </p>
      </div>
    </PageShell>
  );
}
