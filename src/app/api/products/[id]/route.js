import { NextResponse } from "next/server";
import catalogData from "@/data/catalogData.json";

export async function GET(request, { params }) {
  const { id } = params;
  const product = catalogData.products.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json({ detail: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
