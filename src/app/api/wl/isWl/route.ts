import connectDb from "@/dbconfig/dbconfig";
import { NextRequest,NextResponse } from "next/server";
import wl from "@/models/watch-later";
connectDb();

export async function POST(request:NextRequest){
    try {
       const reqBody=await request.json() 
       const {userId,vId}=reqBody;
       const getwl=await wl.findOne({userId,vId})
    if(!getwl){
        return NextResponse.json({
            message:"Success! wl not found",
            data:false,
        })
    }
       return NextResponse.json({
        message:"success!  wl found",
        data:true,
        getwl
       })
    } catch (err:any) {
        console.log(err.message)
        return NextResponse.json({
            error:err.message,
        },{status:500})
    }
}