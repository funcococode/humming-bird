import { db } from "@/server/db";
import { NextResponse, type NextRequest } from "next/server";
import { random } from "lodash";
export interface Today {
  id: string;
  lyrics: string;
  name: string;
  user: {
    id: string;
    name: string;
  };
}
export async function GET(
  request: NextRequest,
): Promise<
  NextResponse<{ data: Today | null; message: string; success: boolean }>
> {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");
  const category = await db.category.findFirst({
    where: {
      name: query ?? "",
    },
    select: {
      id: true,
    },
  });
  if (category?.id) {
    const data = await db.lyrics.findMany({
      where: {
        categoryId: category.id,
      },
      select: {
        id: true,
        lyrics: true,
        name: true,
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    const randomIdx = random(data.length - 1);
    const response = data?.[randomIdx] ?? null;

    return NextResponse.json({ data: response, message: "", success: true });
  }

  return NextResponse.json({
    data: null,
    message: "Something went wrong",
    success: false,
  });
}
