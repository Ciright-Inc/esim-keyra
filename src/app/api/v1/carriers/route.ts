import { NextResponse } from "next/server";

/** Placeholder — wire to carrier management CMS */
export async function GET() {
  return NextResponse.json({
    carriers: [
      {
        id: "carrier_demo_eu",
        name: "Partner MNO (EU)",
        regions: ["EU", "UK"],
        status: "active",
      },
      {
        id: "carrier_demo_apac",
        name: "Partner MNO (APAC)",
        regions: ["APAC"],
        status: "onboarding",
      },
    ],
  });
}
