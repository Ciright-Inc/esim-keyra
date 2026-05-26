import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    plans: [
      {
        id: "global-travel-5",
        name: "Global Travel 5GB",
        dataGb: 5,
        validityDays: 30,
        enterprise: false,
      },
      {
        id: "enterprise-global",
        name: "Enterprise Global",
        dataGb: 50,
        validityDays: 30,
        enterprise: true,
      },
    ],
  });
}
