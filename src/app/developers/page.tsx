import type { Metadata } from "next";
import Link from "next/link";
import { ApiExplorer } from "@/components/developers/ApiExplorer";
import { PageShell } from "@/components/ui/PageShell";
import { codeSnippetExample } from "@/lib/esim-data";

export const metadata: Metadata = {
  title: "Developers",
  description: "KEYRA eSIM API, SDK, GraphQL, webhooks, and interactive API explorer.",
};

const sdks = [
  { name: "Node.js", pkg: "@keyra/esim-sdk" },
  { name: "Python", pkg: "keyra-esim" },
  { name: "Go", pkg: "github.com/keyra/esim" },
];

export default function DevelopersPage() {
  return (
    <PageShell
      eyebrow="Developers"
      title="Developer Documentation"
      description="REST, GraphQL, webhooks, SDK references, and live API explorer for telecom infrastructure teams."
    >
      <nav className="mb-10 flex flex-wrap gap-4">
        <Link href="#explorer" className="ds-text-link text-sm">
          API Explorer
        </Link>
        <Link href="#rest" className="ds-text-link text-sm">
          REST
        </Link>
        <Link href="#webhooks" className="ds-text-link text-sm">
          Webhooks
        </Link>
        <Link href="#sdk" className="ds-text-link text-sm">
          SDK
        </Link>
      </nav>

      <div id="explorer">
        <ApiExplorer />
      </div>

      <section id="rest" className="mt-16">
        <h2 className="ds-title-md">REST API</h2>
        <p className="ds-body-sm mt-2">
          Base path <code className="rounded-[var(--ds-radius-xs)] bg-[var(--ds-surface-strong)] px-1 text-xs">/api/v1</code>
        </p>
        <pre className="ds-code-block mt-6">
          <code>{codeSnippetExample}</code>
        </pre>
      </section>

      <section id="webhooks" className="mt-16">
        <h2 className="ds-title-md">Webhooks</h2>
        <p className="ds-body-sm mt-2">
          provisioning.completed · profile.installed · trust.score.updated
        </p>
      </section>

      <section id="sdk" className="mt-16">
        <h2 className="ds-title-md">SDK references</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {sdks.map((sdk) => (
            <div key={sdk.name} className="ds-feature-card is-static">
              <p className="ds-title-md text-base">{sdk.name}</p>
              <p className="ds-body-sm mt-1 font-mono">{sdk.pkg}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
