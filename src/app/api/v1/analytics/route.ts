import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    metrics: {
      activations24h: 1284,
      regionsActive: 42,
      apiCalls24h: 98210,
      avgDeviceTrustScore: 0.94,
      fraudFlags24h: 3,
    },
  });
}
