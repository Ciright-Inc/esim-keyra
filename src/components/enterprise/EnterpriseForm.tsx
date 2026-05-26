"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export function EnterpriseForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <Card hover={false} className="mx-auto max-w-xl text-center">
        <p className="ds-body-md">
          Request received — enterprise onboarding placeholder. Sales will contact you.
        </p>
      </Card>
    );
  }

  return (
    <Card hover={false} className="mx-auto max-w-xl">
      <form id="contact" onSubmit={handleSubmit} className="space-y-4">
        <Input name="company" label="Company" required />
        <Input name="email" label="Work email" type="email" required />
        <Input name="fleet_size" label="Fleet size" required />
        <Input name="use_case" label="Use case" required />
        <Button type="submit" className="w-full justify-center">
          Submit enterprise request
        </Button>
      </form>
    </Card>
  );
}
