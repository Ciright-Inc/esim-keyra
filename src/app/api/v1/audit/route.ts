import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    entries: [
      {
        id: "aud_1",
        actor: "admin@enterprise.demo",
        action: "provision.bulk",
        resource: "fleet/42",
        timestamp: new Date().toISOString(),
      },
    ],
  });
}
