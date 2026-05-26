"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export function CarrierOnboardingSection() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/v1/carriers/onboarding", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        operator: form.get("operator"),
        contact: form.get("contact"),
      }),
    });
    const data = await res.json();
    setStatus(data.applicationId ?? "Submitted");
    setLoading(false);
  }

  return (
    <Section
      id="carriers"
      eyebrow="Partners"
      title="Carrier onboarding"
      description="Wholesale integration pathway for MNOs and MVNOs — GSMA-aligned, identity-ready."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <ul className="space-y-3">
          {[
            "GSMA SAS / remote provisioning readiness",
            "SM-DP+ and SM-DS endpoint exchange",
            "Commercial wholesale agreement",
            "KEYRA consent & identity policy alignment",
          ].map((item) => (
            <li key={item} className="ds-body-sm flex gap-3">
              <span className="text-[var(--ds-success)]">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <Card hover={false}>
          <form onSubmit={submit} className="space-y-4">
            <Input name="operator" label="Operator name" required />
            <Input name="contact" label="Contact email" type="email" required />
            <Button type="submit" className="w-full justify-center" disabled={loading}>
              {loading ? "Submitting…" : "Start carrier application"}
            </Button>
            {status ? (
              <p className="ds-field-helper text-center text-[var(--ds-success)]">
                Application ID: {status}
              </p>
            ) : null}
          </form>
        </Card>
      </div>
    </Section>
  );
}
