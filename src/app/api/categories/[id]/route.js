import { NextResponse } from "next/server";
import catalogData from "@/data/catalogData.json";

export async function GET(request, { params }) {
  const { id } = params;
  const category = catalogData.categories.find((c) => c.id === id);

  if (!category) {
    return NextResponse.json({ detail: "Category not found" }, { status: 404 });
  }

  return NextResponse.json(category);
}
