import { db } from "@/server/db";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const response = await db.category.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  return NextResponse.json(response);
}

export async function POST(request: NextRequest) {
  const data = (await request.json()) as { name: string };
  const response = await db.category.create({
    data: {
      name: data.name,
    },
    select: {
      id: true,
    },
  });

  if (response.id) {
    return NextResponse.json({ message: "Category created!", success: true });
  }

  return NextResponse.json({ message: "Something went wrong", success: false });
}
