import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({});

export async function GET(req: NextRequest){
  const user = await prisma.user.findMany();
  return new NextResponse(JSON.stringify(user),{status:201});
}
export async function POST(req: NextRequest){
  const {name,id} = await req.json();

  const user = await prisma.user.create({ 
    data: {
      id,
      name,
      
    } 
  });
  return new NextResponse(JSON.stringify(user),{status:201});
}
