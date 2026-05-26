import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy">
      <div className="mx-auto max-w-3xl">
        <p className="ds-body-md">
          Placeholder — consent-first architecture, GDPR alignment, and data minimization
          for KEYRA eSIM at esim.keyra.ie. Replace with legal content from keyra.ie.
        </p>
      </div>
    </PageShell>
  );
}
