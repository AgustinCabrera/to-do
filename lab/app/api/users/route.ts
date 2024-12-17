import { PrismaClient } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({});

export async function GET(req: NextRequest){
  const user = await prisma.user.findMany();
  return NextResponse.json(user),{status:200};
}
export async function POST(req: NextRequest){
  const {name,email} = await req.json();

  const task = await prisma.user.create({ 
    data: {
      name,
      email
    } 
  });
  return new Response(JSON.stringify(task),{status:201});
}
