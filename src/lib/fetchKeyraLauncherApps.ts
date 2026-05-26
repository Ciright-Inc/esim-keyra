import type { LauncherApp } from "@/lib/launcherApp";
import { getKeyraEcosystemAppLinks } from "@/lib/keyraAppUrls";
import { keyraLauncherAppsApiCandidates } from "@/lib/keyraLauncher";

function staticFallback(): LauncherApp[] {
  return getKeyraEcosystemAppLinks().map((a) => ({
    id: a.id,
    label: a.label,
    description: a.description,
    href: a.href,
  }));
}

function isJsonResponse(res: Response): boolean {
  return (res.headers.get("content-type") || "").includes("application/json");
}

/**
 * Loads 9-dot apps from keyra.ie launcher API (with local proxy fallbacks).
 * Primary URL: https://keyra.ie/api/deployments/apps/launcher
 */
export async function fetchKeyraLauncherApps(): Promise<LauncherApp[]> {
  for (const base of keyraLauncherAppsApiCandidates()) {
    try {
      const res = await fetch(`${base}?t=${Date.now()}`, {
        cache: "no-store",
        mode: "cors",
        credentials: "omit",
      });
      if (!res.ok || !isJsonResponse(res)) continue;

      const data = (await res.json()) as { apps?: LauncherApp[] };
      if (Array.isArray(data.apps) && data.apps.length > 0) {
        return data.apps;
      }
    } catch {
      /* try next candidate */
    }
  }

  return staticFallback();
}
