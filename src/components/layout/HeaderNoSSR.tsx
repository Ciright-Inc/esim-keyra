"use client";

import dynamic from "next/dynamic";

const SiteHeader = dynamic(() => import("./EsimSiteHeader").then((m) => m.EsimSiteHeader), {
  ssr: false,
});

export function HeaderNoSSR() {
  return <SiteHeader />;
}

