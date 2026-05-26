"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/esim-data";
import { cn } from "@/lib/utils";

export function SmoothScrollNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 lg:flex"
      aria-label="Section navigation"
    >
      {navLinks.map((link) => {
        const id = link.href.replace("#", "");
        return (
          <a
            key={link.href}
            href={link.href}
            title={link.label}
            className={cn(
              "group flex items-center justify-end gap-2 text-right transition-opacity",
              active === id ? "opacity-100" : "opacity-40 hover:opacity-80",
            )}
          >
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-[10px] text-[var(--ds-body)] transition-all group-hover:max-w-[120px]">
              {link.label}
            </span>
            <span
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                active === id ? "bg-[var(--ds-ink)]" : "bg-[var(--ds-hairline-strong)]",
              )}
            />
          </a>
        );
      })}
    </nav>
  );
}
