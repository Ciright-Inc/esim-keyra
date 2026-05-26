import type { LauncherApp } from "@/lib/launcherApp";
import { getKeyraLauncherUpstreamUrl } from "@/lib/keyraLauncher";

export async function fetchUpstreamLauncherApps(): Promise<LauncherApp[] | null> {
  try {
    const upstream = `${getKeyraLauncherUpstreamUrl()}?t=${Date.now()}`;
    const res = await fetch(upstream, { cache: "no-store" });
    if (!res.ok) return null;

    const data = (await res.json()) as { apps?: LauncherApp[] };
    if (Array.isArray(data.apps) && data.apps.length > 0) {
      return data.apps;
    }
    return null;
  } catch {
    return null;
  }
}
