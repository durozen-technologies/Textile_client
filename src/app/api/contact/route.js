import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      status: "success",
      message: "Message received. We will get back to you shortly.",
      data: body,
    });
  } catch (error) {
    return NextResponse.json({ detail: "Invalid message data" }, { status: 400 });
  }
}
