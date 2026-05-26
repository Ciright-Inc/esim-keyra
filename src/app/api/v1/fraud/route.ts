import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    indicators: [
      { id: "fr_01", type: "activation_velocity", severity: "low", region: "EU" },
      { id: "fr_02", type: "device_trust_anomaly", severity: "medium", region: "US" },
    ],
    monitoring: "placeholder",
  });
}
