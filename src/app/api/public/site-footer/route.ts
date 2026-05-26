import { NextResponse } from "next/server";
import { keyraMarketingPublicOrigin } from "@/lib/keyraAppUrls";
import type { SiteFooterConfig } from "@/lib/siteFooter/types";

export const dynamic = "force-dynamic";

const ESIM_FOOTER_SITE_APP_ID =
  process.env.KEYRA_FOOTER_SITE_APP_ID?.trim() ||
  process.env.NEXT_PUBLIC_KEYRA_FOOTER_SITE_APP_ID?.trim() ||
  "esim";

function isSiteFooterConfig(value: unknown): value is SiteFooterConfig {
  if (!value || typeof value !== "object") return false;
  const payload = value as SiteFooterConfig;
  return (
    Boolean(payload.settings) &&
    Array.isArray(payload.onThisSiteLinks) &&
    Array.isArray(payload.keyraAppLinks) &&
    Array.isArray(payload.socialLinks)
  );
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const siteAppId = searchParams.get("siteAppId")?.trim() || ESIM_FOOTER_SITE_APP_ID;
  const cmsOrigin = keyraMarketingPublicOrigin();
  const upstream = new URL(`${cmsOrigin}/api/public/site-footer`);
  upstream.searchParams.set("siteAppId", siteAppId);

  const origin = request.headers.get("origin");

  try {
    const res = await fetch(upstream.toString(), {
      cache: "no-store",
      headers: origin ? { Origin: origin } : undefined,
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Footer upstream unavailable", status: res.status },
        { status: 502 },
      );
    }

    const data: unknown = await res.json();
    if (!isSiteFooterConfig(data)) {
      return NextResponse.json({ error: "Invalid footer payload" }, { status: 502 });
    }

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store, must-revalidate",
        ...(origin ? { "Access-Control-Allow-Origin": origin } : {}),
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Footer fetch failed";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return new NextResponse(null, { status: 204 });
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Max-Age": "86400",
    },
  });
}
