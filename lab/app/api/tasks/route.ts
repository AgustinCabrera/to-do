import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({});

export async function GET(req: NextRequest) {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}
export async function POST(req: NextRequest){
  const body = await req.json();
  const task = await prisma.task.create({ data: body });
  return NextResponse.json(task);
}
