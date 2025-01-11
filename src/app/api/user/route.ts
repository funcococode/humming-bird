import { createUser } from "@/server/user";
import { type NextRequest, NextResponse } from "next/server";
import { type RegistrationFields } from "../../user/page";
import { db } from "@/server/db";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const query = searchParams.get("q");

  const data = await db.user.findMany({
    select: {
      id: true,
      name: true,
    },
    where: {
      ...(query && {
        OR: [
          {
            username: { contains: query },
          },
          {
            firstname: { contains: query },
          },
          {
            lastname: { contains: query },
          },
        ],
      }),
    },
  });
  return NextResponse.json({ data, message: "success", success: true });
}

export async function POST(
  request: Request,
): Promise<NextResponse<{ message: string; success: boolean }>> {
  const data = (await request.json()) as RegistrationFields;
  const response = await createUser(data);
  return NextResponse.json(response);
}
