import { NextResponse } from "next/server";
import { keyraAuthConfig } from "@/lib/auth/config";

/** OAuth initiation placeholder — wire to KEYRA identity provider */
export async function GET() {
  const authorizeUrl = new URL("/oauth/authorize", keyraAuthConfig.issuer);
  authorizeUrl.searchParams.set("client_id", keyraAuthConfig.clientId);
  authorizeUrl.searchParams.set("scope", keyraAuthConfig.scopes.join(" "));
  authorizeUrl.searchParams.set("response_type", "code");
  authorizeUrl.searchParams.set("redirect_uri", `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3040"}/api/auth/callback`);

  return NextResponse.json({
    status: "placeholder",
    authorizeUrl: authorizeUrl.toString(),
    message: "Connect KEYRA OAuth in production",
  });
}
