import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { code, order_amount } = await request.json();
    const upperCode = (code || "").trim().toUpperCase();

    if (upperCode === "WELCOME10" || upperCode === "DEERA10") {
      const discount = Math.round(Number(order_amount) * 0.1);
      return NextResponse.json({
        valid: true,
        code: upperCode,
        discount_amount: discount,
        final_amount: Number(order_amount) - discount,
        message: "10% discount applied successfully!",
      });
    }

    if (upperCode === "DEERA500") {
      const discount = Math.min(500, Number(order_amount));
      return NextResponse.json({
        valid: true,
        code: upperCode,
        discount_amount: discount,
        final_amount: Number(order_amount) - discount,
        message: "₹500 discount applied successfully!",
      });
    }

    return NextResponse.json(
      { detail: "Invalid or expired coupon code" },
      { status: 400 }
    );
  } catch (err) {
    return NextResponse.json({ detail: "Failed to apply coupon" }, { status: 400 });
  }
}
