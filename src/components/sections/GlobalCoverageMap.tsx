"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { WorldCoverageVisualization } from "@/components/visual/WorldCoverageVisualization";
import { coverageStats } from "@/lib/esim-data";

export function GlobalCoverageMap() {
  return (
    <Section
      id="coverage"
      eyebrow="Global reach"
      title="Worldwide Coverage"
      description="Interactive roaming visualization with carrier availability — live integrations via telecom API layer."
      band="soft"
    >
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
        <Card hover={false} className="overflow-hidden !p-0 lg:col-span-3">
          <WorldCoverageVisualization />
        </Card>
        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {coverageStats.map((stat) => (
            <Card key={stat.key} hover={false}>
              <p className="ds-display-md text-2xl md:text-3xl">{stat.value}</p>
              <p className="ds-body-sm mt-2">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
