import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient({});

export async function DELETE(req: NextRequest,  {params}:{params: {id: string}}){
  const taskId = parseInt(params.id); 
  await prisma.task.delete({ where: { id: taskId } });
  return new NextResponse(JSON.stringify({ message: "Task deleted" }), {
    status: 200,
  });
};
