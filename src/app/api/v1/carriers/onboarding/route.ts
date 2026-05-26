import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json(
    {
      applicationId: `onb_${Date.now()}`,
      status: "received",
      message: "Carrier wholesale onboarding — review queue placeholder",
      received: body,
    },
    { status: 202 }
  );
}

export async function GET() {
  return NextResponse.json({
    requirements: [
      "GSMA SAS accreditation or equivalent",
      "SM-DP+ / SM-DS integration endpoints",
      "Commercial wholesale agreement",
      "Identity & consent policy alignment with KEYRA",
    ],
    contact: "carriers@keyra.ie",
  });
}
