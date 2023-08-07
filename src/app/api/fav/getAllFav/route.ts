import connectDb from "@/dbconfig/dbconfig";
import { NextRequest,NextResponse } from "next/server";
import fav from "@/models/fav";
connectDb();

export async function POST(request:NextRequest){
    try {
       const reqBody=await request.json() 
       const {userId}=reqBody;
       const allfav=await fav.find({userId}).sort({createdAt:'desc'})
       return NextResponse.json({
        message:"success! All fav are found",
        allfav
       })
    } catch (err:any) {
        console.log(err.message)
        return NextResponse.json({
            error:err.message,
        },{status:500})
    }
}