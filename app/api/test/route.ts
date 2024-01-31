import { NextResponse } from 'next/server'
 

 
export async  function GET() {
 return NextResponse.json({
    name:'saied'
  })
}

export async function POST(requst:Request)
  {
       const data= await requst.json();
       return NextResponse.json(
        {data,}
       )
  }