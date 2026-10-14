import { NextResponse } from "next/server";
import catalogData from "@/data/catalogData.json";

export async function GET() {
  const allVariants = catalogData.products.flatMap((p) => p.variants || []);
  return NextResponse.json(allVariants);
}
