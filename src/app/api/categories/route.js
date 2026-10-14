import { NextResponse } from "next/server";
import catalogData from "@/data/catalogData.json";

export async function GET() {
  return NextResponse.json(catalogData.categories);
}
