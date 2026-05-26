import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Placeholder middleware — extend for KEYRA session, enterprise SSO, admin RBAC.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    const adminKey = process.env.ADMIN_PREVIEW_KEY;
    if (adminKey) {
      const provided = request.headers.get("x-admin-key");
      if (provided !== adminKey) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
