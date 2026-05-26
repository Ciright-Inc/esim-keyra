"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Modal } from "@/components/ui/Modal";
import { Card } from "@/components/ui/Card";
import { EsimIcon } from "@/components/ui/EsimIcon";
import { platformCards } from "@/lib/esim-data";
import { staggerChild, staggerParent } from "@/lib/esimMotion";

export function PlatformOverview() {
  const [active, setActive] = useState<string | null>(null);
  const card = platformCards.find((c) => c.id === active);

  return (
    <Section
      id="platform"
      eyebrow="Platform"
      title="More Than Connectivity"
      description="Identity-aware connectivity, secure device onboarding, and sovereign-grade mobile trust — not a commodity data marketplace."
    >
      <motion.div
        className="ds-card-grid lg:grid-cols-4"
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-5% 0px" }}
      >
        {platformCards.map((item) => (
          <motion.div key={item.id} variants={staggerChild}>
            <Card as="button" onClick={() => setActive(item.id)} className="h-full w-full">
              <EsimIcon name={item.icon} className="mb-4 text-[var(--ds-text-link)]" />
              <h3 className="ds-title-md">{item.title}</h3>
              <p className="ds-body-sm mt-2">{item.summary}</p>
              <span className="ds-text-link mt-4 inline-block text-xs">View details</span>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <Modal open={!!card} onClose={() => setActive(null)} title={card?.title ?? ""}>
        {card ? (
          <>
            <p>{card.detail}</p>
            <p className="ds-field-helper mt-4">
              CMS placeholder: plan / carrier bindings per feature module.
            </p>
          </>
        ) : null}
      </Modal>
    </Section>
  );
}
