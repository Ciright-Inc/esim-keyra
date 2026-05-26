"use client";

import { useEffect, useState } from "react";
import { SiteFooterView } from "./SiteFooterView";
import { getDefaultSiteFooterConfig } from "@/lib/siteFooter/defaults";
import type { SiteFooterConfig } from "@/lib/siteFooter/types";

const FOOTER_API = "/api/public/site-footer?siteAppId=esim";

type Props = {
  initialConfig: SiteFooterConfig;
};

function mergeFooter(remote: SiteFooterConfig, esimDefaults: SiteFooterConfig): SiteFooterConfig {
  return {
    settings: {
      ...remote.settings,
      description: esimDefaults.settings.description,
      onThisSiteLabel: esimDefaults.settings.onThisSiteLabel,
      keyraAppsLabel: remote.settings.keyraAppsLabel || esimDefaults.settings.keyraAppsLabel,
      logoSrc: remote.settings.logoSrc || esimDefaults.settings.logoSrc,
    },
    onThisSiteLinks: esimDefaults.onThisSiteLinks,
    keyraAppLinks:
      remote.keyraAppLinks.length > 0 ? remote.keyraAppLinks : esimDefaults.keyraAppLinks,
    socialLinks:
      remote.socialLinks?.length > 0 ? remote.socialLinks : esimDefaults.socialLinks,
  };
}

/** Client refresh so footer + CMS fetch appear in DevTools on localhost. */
export function SiteFooterClient({ initialConfig }: Props) {
  const [config, setConfig] = useState(initialConfig);

  useEffect(() => {
    let cancelled = false;
    const esimDefaults = getDefaultSiteFooterConfig();

    async function load() {
      try {
        const res = await fetch(FOOTER_API, { cache: "no-store" });
        if (!res.ok || cancelled) return;
        const remote = (await res.json()) as SiteFooterConfig;
        if (!remote?.settings || cancelled) return;
        setConfig(mergeFooter(remote, esimDefaults));
      } catch {
        /* keep SSR initial */
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  return <SiteFooterView config={config} />;
}
