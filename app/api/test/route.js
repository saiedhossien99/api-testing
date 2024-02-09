import { headers } from 'next/headers';
import { NextResponse } from 'next/server'
 
export async  function GET() {
 return NextResponse.json({
    name:'saied'
  })
}

export async function POST(requst)
  {
       const data= await requst.json();
       return NextResponse.json(
        data,{status:201,headers:{
          "role":data.name,
          "content-type":"api/json"
        }}
       )
  }

  