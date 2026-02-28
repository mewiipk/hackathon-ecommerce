import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    syncedPlatforms: ["Shopee", "Lazada", "Facebook", "TikTok"],
    syncedAt: new Date().toISOString()
  });
}
