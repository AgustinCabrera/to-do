import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({});

export async function GET (req: NextRequest, {params}:{params: {id: string}}) {
  const { id } = params;
  const task = await prisma.task.findUnique({ where: { id: Number(id) } });
  return NextResponse.json(task);
}
export async function POST(req: NextRequest, {params}:{params: {id: string}}){
  const { id } = params;
  const { body } = req;
  const task = await prisma.task.update({
    where: { id: Number(id) },
    data: body,
  });
  return NextResponse.json(task);
}
export async function DELETE(req: NextRequest,  {params}:{params: {id: string}}){
  const { id } = params;
  const task = await prisma.task.delete({ where: { id: Number(id) } });
  return NextResponse.json(task);
}