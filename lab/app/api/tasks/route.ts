import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({});

export async function GET(req: NextRequest) {
  const tasks = await prisma.task.findMany({
    include: {
      user: true,
    },
  });
  return new NextResponse(JSON.stringify(tasks),{status:201});
}
export async function POST(req: NextRequest){
  const body = await req.json();
  const task = await prisma.task.create({ 
    data:{
      title: body.title,
      date: new Date(body.date),
      userId: parseInt(body.userId),
    }});
  return new NextResponse(JSON.stringify(task),{status:201});
}
