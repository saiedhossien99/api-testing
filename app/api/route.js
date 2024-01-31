import {NextResponse } from "next/server"
export async function GET() {
   return NextResponse.json({ message: 'Hello from Next.js!' })
  }


  export async function POST(requst)
  {
       const data= await requst.json();
       const age=data.age;
       return NextResponse.json(
        {age,}
       )
  }