import connectDb from "@/dbconfig/dbconfig";
import { NextRequest,NextResponse } from "next/server";
import fav from "@/models/fav";
connectDb();

export async function POST(request:NextRequest){
    try {
       const reqBody=await request.json() 
       const {userId,vId}=reqBody;
       const getfav=await fav.findOne({userId,vId})
    if(!getfav){
        return NextResponse.json({
            message:"Success! Fav not found",
            data:false,
        })
    }
       return NextResponse.json({
        message:"success!  fav found",
        data:true,
        getfav
       })
    } catch (err:any) {
        console.log(err.message)
        return NextResponse.json({
            error:err.message,
        },{status:500})
    }
}