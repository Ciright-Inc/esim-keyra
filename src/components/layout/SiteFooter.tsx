import { loadPublicSiteFooterConfig } from "@/lib/siteFooter/loadSiteFooter";
import { SiteFooterClient } from "./SiteFooterClient";

export async function SiteFooter() {
  const config = await loadPublicSiteFooterConfig();
  return <SiteFooterClient initialConfig={config} />;
}
