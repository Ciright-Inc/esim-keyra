"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TelecomGridBackground } from "@/components/visual/TelecomGridBackground";
import { FloatingEsimCards } from "@/components/visual/FloatingEsimCards";
import { TrustRing } from "@/components/visual/TrustRing";
import { fadeUp } from "@/lib/esimMotion";
import { siteConfig } from "@/lib/site-metadata";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

const indicators = ["Carrier verified", "Identity bound", "Consent aware"];

export function HeroSection() {
  const reduce = useHydratedReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const motionEnabled = mounted && !reduce;

  return (
    <section className="relative min-h-[92vh] overflow-hidden border-b border-[var(--ds-hairline-strong)] pt-24">
      <TelecomGridBackground />
      <FloatingEsimCards />
      <div className="ds-page relative z-10 flex flex-col gap-16 pb-24 lg:flex-row lg:items-center lg:gap-12 lg:pb-32">
        <motion.div
          className="max-w-3xl flex-1"
          initial={motionEnabled ? "hidden" : false}
          animate={motionEnabled ? "visible" : false}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p className="ds-caption-uppercase mb-2" variants={fadeUp}>
            Trusted Global Connectivity Infrastructure
          </motion.p>
          <motion.h1 className="ds-display-mega mt-6" variants={fadeUp}>
            Global Connectivity Built on Trust
          </motion.h1>
          <motion.p className="ds-body-md mt-4 max-w-xl text-lg" variants={fadeUp}>
            KEYRA eSIM delivers secure, identity-aware mobile connectivity for
            individuals, enterprises, devices, and AI-era infrastructure.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-3" variants={fadeUp}>
            <Button href="/activate">Activate eSIM</Button>
            <Button href="/enterprise" variant="secondary">
              Enterprise Platform
            </Button>
          </motion.div>
          <motion.ul className="mt-10 flex flex-wrap gap-3" variants={fadeUp}>
            {indicators.map((label) => (
              <li key={label} className="ds-badge-pill normal-case tracking-normal">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--ds-success)]" />
                {label}
              </li>
            ))}
          </motion.ul>
          <motion.p className="ds-body-sm mt-8" variants={fadeUp}>
            {siteConfig.tagline}
          </motion.p>
        </motion.div>
        <div className="flex flex-1 items-center justify-center lg:justify-end">
          <TrustRing />
        </div>
      </div>
    </section>
  );
}
