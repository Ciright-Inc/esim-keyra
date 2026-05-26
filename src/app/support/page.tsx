import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";

export const metadata: Metadata = {
  title: "Support",
};

export default function SupportPage() {
  return (
    <PageShell
      title="Support"
      description="Enterprise and carrier support — tickets API and contact."
    >
      <div className="mx-auto max-w-3xl">
        <p className="ds-body-md">
          Tickets API at{" "}
          <code className="rounded-[var(--ds-radius-xs)] bg-[var(--ds-surface-strong)] px-1.5 py-0.5 text-sm">
            /api/v1/support/tickets
          </code>
          . Email{" "}
          <a href="mailto:support@keyra.ie" className="ds-text-link">
            support@keyra.ie
          </a>
        </p>
      </div>
    </PageShell>
  );
}
