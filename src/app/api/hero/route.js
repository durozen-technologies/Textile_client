import { NextResponse } from "next/server";
import catalogData from "@/data/catalogData.json";

export async function GET() {
  const activeHero = catalogData.heroes.find((h) => h.is_active) || catalogData.heroes[0];
  return NextResponse.json(activeHero);
}
