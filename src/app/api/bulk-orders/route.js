import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      status: "success",
      message: "Bulk order inquiry received successfully.",
      data: body,
    });
  } catch (error) {
    return NextResponse.json({ detail: "Invalid request data" }, { status: 400 });
  }
}
