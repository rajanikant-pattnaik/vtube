import connectDb from "@/dbconfig/dbconfig";
import { NextRequest,NextResponse } from "next/server";
import wl from "@/models/watch-later";
connectDb();

export async function POST(request:NextRequest){
    try {
       const reqBody=await request.json() 
       const {userId}=reqBody;
       const allwl=await wl.find({userId})
       return NextResponse.json({
        message:"success! All wl are found",
        allwl
       })
    } catch (err:any) {
        console.log(err.message)
        return NextResponse.json({
            error:err.message,
        },{status:500})
    }
}