import { NextResponse } from "next/server";
import { cmsModules } from "@/lib/cms/placeholder-store";

export async function GET() {
  return NextResponse.json({ modules: cmsModules });
}
