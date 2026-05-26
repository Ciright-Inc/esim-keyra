import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    inventory: [
      { iccid: "89014103211118510720", status: "available", planId: null },
      { iccid: "89014103211118510721", status: "assigned", planId: "travel-5" },
      { iccid: "89014103211118510722", status: "activated", planId: "enterprise-global" },
    ],
  });
}
