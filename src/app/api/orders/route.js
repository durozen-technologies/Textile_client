import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const orderNumber = `DS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    return NextResponse.json({
      id: `demo-${Date.now()}`,
      order_number: orderNumber,
      status: "PLACED",
      total_amount: body.final_amount || body.total_amount || 0,
      customer_name: body.customer_name || "Guest Customer",
      customer_email: body.customer_email || "demo@example.com",
      created_at: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({ detail: "Invalid order data" }, { status: 400 });
  }
}
