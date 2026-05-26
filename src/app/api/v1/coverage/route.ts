import { NextResponse } from "next/server";
import { coverageStats } from "@/lib/esim-data";

export async function GET() {
  return NextResponse.json({
    stats: Object.fromEntries(coverageStats.map((s) => [s.key, s.value])),
    countries: [
      { iso: "IE", name: "Ireland", roaming: true, carriers: ["carrier_demo_eu"] },
      { iso: "US", name: "United States", roaming: true, carriers: ["carrier_demo_eu"] },
      { iso: "JP", name: "Japan", roaming: true, carriers: ["carrier_demo_apac"] },
    ],
  });
}
