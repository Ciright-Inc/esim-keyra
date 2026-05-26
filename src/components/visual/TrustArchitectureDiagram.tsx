"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { trustStackSteps } from "@/lib/esim-data";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

export function TrustArchitectureDiagram() {
  const reduce = useHydratedReducedMotion();

  return (
    <div className="relative mx-auto max-w-md">
      <div className="absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 bg-[var(--ds-hairline-strong)]" />
      <ol className="relative space-y-4">
        {trustStackSteps.map((step, i) => (
          <motion.li
            key={step.id}
            initial={reduce ? {} : { opacity: 0, x: -12 }}
            whileInView={reduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Card hover={false} className="flex items-center gap-4 !py-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--ds-hairline-strong)] text-xs font-semibold text-[var(--ds-ink)]">
                {i + 1}
              </span>
              <span className="ds-body-sm font-medium text-[var(--ds-ink)]">
                {step.label}
              </span>
              {i < trustStackSteps.length - 1 ? (
                <span className="ds-body-sm ml-auto" aria-hidden>
                  ↓
                </span>
              ) : (
                <span className="ds-caption-uppercase ml-auto flex items-center gap-1 text-[var(--ds-success)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--ds-success)]" />
                  Live
                </span>
              )}
            </Card>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
