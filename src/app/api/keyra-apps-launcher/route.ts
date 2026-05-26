import { NextResponse } from "next/server";
import { getKeyraEcosystemAppLinks } from "@/lib/keyraAppUrls";
import { fetchUpstreamLauncherApps } from "@/lib/fetchUpstreamLauncherApps";

export const dynamic = "force-dynamic";

function fallbackPayload() {
  return {
    apps: getKeyraEcosystemAppLinks().map((a) => ({
      id: a.id,
      label: a.label,
      description: a.description,
      href: a.href,
    })),
  };
}

export async function GET() {
  const apps = await fetchUpstreamLauncherApps();
  if (apps) {
    return NextResponse.json(
      { apps },
      { headers: { "Cache-Control": "no-store" } },
    );
  }
  return NextResponse.json(fallbackPayload(), {
    headers: { "Cache-Control": "no-store" },
  });
}
