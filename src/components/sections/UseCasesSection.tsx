"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Modal } from "@/components/ui/Modal";
import { Card } from "@/components/ui/Card";
import { EsimIcon } from "@/components/ui/EsimIcon";
import { useCases } from "@/lib/esim-data";
import { staggerChild, staggerParent } from "@/lib/esimMotion";

export function UseCasesSection() {
  const [active, setActive] = useState<string | null>(null);
  const item = useCases.find((u) => u.id === active);

  return (
    <Section
      id="use-cases"
      eyebrow="Use cases"
      title="Connectivity for every trusted context"
      description="From travelers to telecom operators — segmented journeys with expandable institutional detail."
    >
      <motion.div
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {useCases.map((uc) => (
          <motion.div key={uc.id} variants={staggerChild}>
            <Card as="button" onClick={() => setActive(uc.id)} className="h-full w-full !p-5">
              <EsimIcon name={uc.icon} className="mb-3 h-5 w-5 text-[var(--ds-text-link)]" />
              <h3 className="ds-title-md text-base">{uc.title}</h3>
              <p className="ds-body-sm mt-2">{uc.summary}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <Modal open={!!item} onClose={() => setActive(null)} title={item?.title ?? ""}>
        {item ? <p>{item.detail}</p> : null}
      </Modal>
    </Section>
  );
}
