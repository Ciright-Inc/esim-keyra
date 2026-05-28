import { NextResponse } from "next/server";
import { AUTH_BACKEND_URL } from "@/lib/auth/auth-backend-url";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const upstream = `${AUTH_BACKEND_URL}/auth/session`;
  const cookie = request.headers.get("cookie") ?? "";

  const res = await fetch(upstream, {
    method: "GET",
    headers: {
      cookie,
      accept: "application/json",
      "cache-control": "no-cache",
      pragma: "no-cache",
    },
    cache: "no-store",
  });

  const body = await res.text();

  // Forward session cookies (if upstream refreshes/rotates them)
  const headers = new Headers();
  const anyHeaders = res.headers as unknown as { getSetCookie?: () => string[] };
  const setCookies = typeof anyHeaders.getSetCookie === "function" ? anyHeaders.getSetCookie() : [];
  if (setCookies.length) {
    headers.set("set-cookie", setCookies.join(", "));
  } else {
    const setCookie = res.headers.get("set-cookie");
    if (setCookie) headers.set("set-cookie", setCookie);
  }

  return new NextResponse(body, {
    status: res.status,
    headers: {
      "content-type": res.headers.get("content-type") ?? "application/json",
      ...Object.fromEntries(headers.entries()),
    },
  });
}

