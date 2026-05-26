"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { codeSnippetExample } from "@/lib/esim-data";

export function DeveloperSection() {
  return (
    <Section
      id="developers"
      eyebrow="Developers"
      title="Built for Developers and Telecom Infrastructure Teams"
      description="REST + GraphQL placeholders, SDK references, webhooks, and API explorer — Stripe-level clarity for orchestration engineers."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          {["REST API", "GraphQL", "Webhooks", "SDK (Node)"].map((item) => (
            <Card key={item} hover={false} className="!py-4">
              <span className="ds-body-sm font-medium text-[var(--ds-ink)]">{item}</span>
              <span className="ds-field-helper ml-2">— placeholder</span>
            </Card>
          ))}
          <Button href="/developers" variant="secondary">
            Open developer portal
          </Button>
        </div>
        <pre className="ds-code-block">
          <code>{codeSnippetExample}</code>
        </pre>
      </div>
    </Section>
  );
}
