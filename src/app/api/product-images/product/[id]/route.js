import { NextResponse } from "next/server";
import catalogData from "@/data/catalogData.json";

export async function GET(request, { params }) {
  const { id } = params;
  const images = catalogData.productImagesMap[id] || [];

  return NextResponse.json(images);
}
