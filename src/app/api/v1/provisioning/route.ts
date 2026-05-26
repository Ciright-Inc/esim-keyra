import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({
    jobId: `prov_${Date.now()}`,
    status: "queued",
    message: "Provisioning placeholder — integrate telecom orchestration layer",
    received: body,
  });
}
