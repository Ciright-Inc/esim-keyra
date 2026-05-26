import { NextResponse } from "next/server";

const events = [
  "provisioning.completed",
  "profile.installed",
  "profile.suspended",
  "trust.score.updated",
  "fraud.indicator.raised",
  "consent.updated",
];

export async function GET() {
  return NextResponse.json({ events, subscribeUrl: "/api/v1/webhooks" });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({
    subscriptionId: `wh_${Date.now()}`,
    status: "registered",
    events: body.events ?? events.slice(0, 3),
    secretPlaceholder: "whsec_…",
  });
}
