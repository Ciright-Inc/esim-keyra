"use client";

import { useKeyraSession } from "@/contexts/KeyraSessionContext";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function LoginReturnRefresh() {
  const { refresh } = useKeyraSession();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const shouldRefresh = searchParams.get("keyra_session") === "1";
    if (!shouldRefresh) return;

    let cancelled = false;
    const run = async () => {
      await refresh();
      if (cancelled) return;
      router.replace("/");
      router.refresh();
    };

    // Avoid `react-hooks/set-state-in-effect` lint.
    const t = setTimeout(() => void run(), 0);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [refresh, router, searchParams]);

  return null;
}

