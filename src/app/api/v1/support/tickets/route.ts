import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    tickets: [
      { id: "t_1001", subject: "Bulk fleet activation", status: "open", priority: "high" },
      { id: "t_1002", subject: "Roaming policy", status: "pending", priority: "normal" },
    ],
  });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({
    id: `t_${Date.now()}`,
    status: "open",
    received: body,
  });
}
