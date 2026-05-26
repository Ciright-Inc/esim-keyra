"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe `prefers-reduced-motion` — defaults to reduced on server and first paint
 * so markup matches before reading `matchMedia` (avoids Framer hydration mismatches).
 */
export function useHydratedReducedMotion(): boolean {
  const [reduce, setReduce] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduce;
}
