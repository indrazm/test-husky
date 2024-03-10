import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET() {
  const allNotes = await prisma.note.findMany();

  return NextResponse.json({ data: allNotes });
}

export async function POST(req: NextRequest) {
  const { content } = await req.json();

  const createNote = await prisma.note.create({
    data: {
      content,
    },
  });

  return NextResponse.json({ data: createNote });
}
