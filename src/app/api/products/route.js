import { NextResponse } from "next/server";
import catalogData from "@/data/catalogData.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get("category_id");
  const isEditorPick = searchParams.get("is_editor_pick");
  const isBestSeller = searchParams.get("is_best_seller");
  const isNewArrival = searchParams.get("is_new_arrival");

  let products = [...catalogData.products];

  if (categoryId) {
    products = products.filter((p) => p.category_id === categoryId);
  }
  if (isEditorPick === "true") {
    products = products.filter((p) => p.is_editor_pick);
  }
  if (isBestSeller === "true") {
    products = products.filter((p) => p.is_best_seller);
  }
  if (isNewArrival === "true") {
    products = products.filter((p) => p.is_new_arrival);
  }

  return NextResponse.json(products);
}
