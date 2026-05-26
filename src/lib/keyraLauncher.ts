import { keyraMarketingPublicOrigin } from "@/lib/keyraAppUrls";

/** Public launcher endpoint — same as keyra.ie 9-dot (`/api/deployments/apps/launcher`). */
export function keyraLauncherPublicApiUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_KEYRA_LAUNCHER_APPS_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");
  return `${keyraMarketingPublicOrigin()}/api/deployments/apps/launcher`;
}

/**
 * Client fetch order: keyra.ie direct (visible in DevTools), then same-origin proxies.
 */
export function keyraLauncherAppsApiCandidates(): string[] {
  const direct = keyraLauncherPublicApiUrl();
  const candidates = [
    direct,
    "/api/deployments/apps/launcher",
    "/api/keyra-apps-launcher",
  ];
  return [...new Set(candidates)];
}

/** Server-side upstream for API route proxies. */
export function getKeyraLauncherUpstreamUrl(): string {
  const serverExplicit = (
    process.env.KEYRA_LAUNCHER_APPS_URL ||
    process.env.NEXT_PUBLIC_KEYRA_LAUNCHER_APPS_URL ||
    ""
  ).trim();
  if (serverExplicit) return serverExplicit.replace(/\/+$/, "");

  const devOrigin = process.env.KEYRA_DEV_ORIGIN?.trim();
  if (process.env.NODE_ENV === "development" && devOrigin) {
    return `${devOrigin.replace(/\/+$/, "")}/api/deployments/apps/launcher`;
  }

  return keyraLauncherPublicApiUrl();
}
