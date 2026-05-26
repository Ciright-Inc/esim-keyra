"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const endpoints = [
  { method: "GET", path: "/api/v1/coverage", label: "Coverage" },
  { method: "GET", path: "/api/v1/plans", label: "Plans" },
  { method: "POST", path: "/api/v1/provisioning", label: "Provision" },
  { method: "GET", path: "/api/v1/analytics", label: "Analytics" },
  { method: "GET", path: "/api/v1/fraud", label: "Fraud" },
  { method: "POST", path: "/api/v1/graphql", label: "GraphQL" },
  { method: "GET", path: "/api/v1/webhooks", label: "Webhooks" },
];

export function ApiExplorer() {
  const [selected, setSelected] = useState(endpoints[0]);
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true);
    try {
      const res = await fetch(selected.path, {
        method: selected.method,
        headers: { "Content-Type": "application/json" },
        body:
          selected.method === "POST"
            ? JSON.stringify({ query: "{ coverage { countries } }" })
            : undefined,
      });
      const json = await res.json();
      setResponse(JSON.stringify(json, null, 2));
    } catch (e) {
      setResponse(String(e));
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card hover={false}>
      <h2 className="ds-title-md">API Explorer</h2>
      <p className="ds-body-sm mt-2">Try placeholder endpoints against this deployment.</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {endpoints.map((ep) => (
          <button
            key={ep.path}
            type="button"
            onClick={() => setSelected(ep)}
            className={
              selected.path === ep.path
                ? "ds-badge-pill bg-[var(--ds-ink)] text-[var(--ds-on-primary)]"
                : "ds-badge-pill normal-case tracking-normal"
            }
          >
            {ep.method} {ep.label}
          </button>
        ))}
      </div>
      <p className="ds-body-sm mt-4 font-mono">
        {selected.method} {selected.path}
      </p>
      <Button className="mt-4" onClick={run}>
        {loading ? "Running…" : "Send request"}
      </Button>
      <pre className="ds-code-block mt-6 max-h-64 text-xs">
        {response || "Response will appear here"}
      </pre>
    </Card>
  );
}
