"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { EsimSiteHeader } from "@/components/layout/EsimSiteHeader";
import { SmoothScrollNav } from "@/components/layout/SmoothScrollNav";

export function SiteShell({
  children,
  footer,
}: {
  children: ReactNode;
  footer?: ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-full w-full min-w-0 flex-col">
      <EsimSiteHeader />
      <main className="min-w-0 flex-1">{children}</main>
      <SmoothScrollNav />
      {footer}
    </div>
  );
}
