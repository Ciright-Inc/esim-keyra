import { NextResponse } from "next/server";

/** GraphQL placeholder — replace with Apollo/Yoga + telecom schema */
export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({
    data: {
      esim: {
        coverage: { countries: 190 },
        provision: { status: "placeholder" },
      },
    },
    extensions: {
      message: "GraphQL stub — implement full schema in backend layer",
      received: body,
    },
  });
}

export async function GET() {
  return NextResponse.json({
    endpoint: "/api/v1/graphql",
    method: "POST",
    sampleQuery: `query { coverage { countries } }`,
  });
}
