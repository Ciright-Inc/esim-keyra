import { NextResponse } from "next/server";

/** SIM / device-bound authentication placeholder */
export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({
    sessionId: `dev_sess_${Date.now()}`,
    trustScore: 0.92,
    simBound: true,
    attestation: "placeholder",
    received: body,
  });
}
