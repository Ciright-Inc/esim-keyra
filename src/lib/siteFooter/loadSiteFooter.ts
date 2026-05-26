import { headers } from "next/headers";
import { getDefaultSiteFooterConfig } from "./defaults";
import type { SiteFooterConfig } from "./types";

const FOOTER_SITE_APP_ID =
  process.env.KEYRA_FOOTER_SITE_APP_ID?.trim() ||
  process.env.NEXT_PUBLIC_KEYRA_FOOTER_SITE_APP_ID?.trim() ||
  "esim";

async function footerApiBaseUrl(): Promise<string> {
  const hdrs = await headers();
  const host = hdrs.get("x-forwarded-host") ?? hdrs.get("host");
  if (!host) {
    return (
      process.env.NEXT_PUBLIC_SITE_URL?.trim()?.replace(/\/+$/, "") ||
      "http://localhost:3040"
    );
  }
  const proto = hdrs.get("x-forwarded-proto") ?? "http";
  return `${proto}://${host}`;
}

/**
 * Loads footer via same-origin proxy → keyra.ie CMS (`siteAppId=esim`).
 * Merges esim-specific on-site links and description.
 */
export async function loadPublicSiteFooterConfig(): Promise<SiteFooterConfig> {
  const esimDefaults = getDefaultSiteFooterConfig();

  try {
    const base = await footerApiBaseUrl();
    const url = `${base}/api/public/site-footer?siteAppId=${encodeURIComponent(FOOTER_SITE_APP_ID)}`;
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) return esimDefaults;

    const remote = (await res.json()) as SiteFooterConfig;
    if (!remote?.settings || !Array.isArray(remote.keyraAppLinks)) {
      return esimDefaults;
    }

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
  } catch {
    return esimDefaults;
  }
}
