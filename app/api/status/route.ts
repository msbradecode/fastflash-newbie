import { type NextRequest, NextResponse } from "next/server"
import { runtime, getTotalReq } from "@/lib/helpers"
import { SETTINGS } from "@/lib/config"

export async function GET(request: NextRequest) {
  try {
    const hostname = request.headers.get("host") || "localhost"

    return NextResponse.json({
      status: true,
      result: {
        status: "Active",
        totalrequest: getTotalReq().toString(),
        totalfitur: "50+", // You can calculate this dynamically
        runtime: runtime(process.uptime()),
        domain: hostname,
      },
      creator: SETTINGS.creator,
    })
  } catch (error) {
    return NextResponse.json({ status: false, error: "Internal server error" }, { status: 500 })
  }
}
