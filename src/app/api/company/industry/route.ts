import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET() {
  const result = await prisma.industry.findMany();
  return NextResponse.json(result);
}
