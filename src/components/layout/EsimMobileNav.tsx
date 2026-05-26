"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/esim-data";
import { keyraDeveloperPortalUrl } from "@/lib/keyraAppUrls";

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function EsimMobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const links = [
    ...navLinks.map((l) => ({ href: l.href, label: l.label, external: false })),
    { href: "/activate", label: "Activate eSIM", external: false },
    { href: "/enterprise", label: "Enterprise platform", external: false },
    { href: "/login", label: "Sign in", external: false },
    { href: keyraDeveloperPortalUrl(), label: "Developer portal", external: true },
  ];

  return (
    <div className="relative z-10 shrink-0 lg:hidden">
      <button
        type="button"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--keyra-radius-pill)] border border-keyra-border bg-white text-keyra-primary transition-colors hover:bg-black/[0.04]"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <HamburgerIcon />
      </button>
      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              className="fixed inset-x-0 bottom-0 top-[var(--keyra-header-offset)] z-[var(--keyra-z-overlay)] bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.nav
              id="mobile-nav-panel"
              className="fixed inset-x-0 top-[var(--keyra-header-offset)] z-[calc(var(--keyra-z-overlay)+1)] max-h-[calc(100dvh-var(--keyra-header-offset))] overflow-y-auto border-b border-keyra-border bg-keyra-bg px-4 py-4 lg:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <ul className="flex flex-col gap-1">
                {links.map((item) => (
                  <li key={item.href}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg px-3 py-3 text-[15px] font-medium text-keyra-primary"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="block rounded-lg px-3 py-3 text-[15px] font-medium text-keyra-primary"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
