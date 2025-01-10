import { db } from "@/server/db";
import { type NextRequest, NextResponse } from "next/server";
interface PostData {
  writerId: string;
  lyrics: string;
  title: string;
  categoryId: string;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");
  const response = await db.lyrics.findMany({
    select: {
      id: true,
      name: true,
      lyrics: true,
      user: {
        select: {
          id: true,
          name: true,
          username: true,
        },
      },
    },
    where: {
      ...(query && { name: { contains: query } }),
    },
  });

  return NextResponse.json(response);
}

export async function POST(request: NextRequest) {
  const data = (await request.json()) as PostData;
  const response = await db.lyrics.create({
    data: {
      name: data.title,
      lyrics: data.lyrics,
      categoryId: data.categoryId,
      userId: data.writerId,
    },
    select: {
      id: true,
    },
  });

  if (response.id) {
    return NextResponse.json({
      message: "Lyrics added successfully.",
      success: true,
    });
  }

  return NextResponse.json({
    message: "Something went wrong!",
    success: false,
  });
}
