import connectDb from "@/dbconfig/dbconfig";
import { NextRequest,NextResponse } from "next/server";
import history from "@/models/history";
connectDb();

export async function POST(request:NextRequest){
    try {
       const reqBody=await request.json() 
       const {userId}=reqBody;
       const allHistory=await history.find({userId}).sort({createdAt:'desc'})
       return NextResponse.json({
        message:"success! All hstory are found",
        allHistory
       })
    } catch (err:any) {
        console.log(err.message)
        return NextResponse.json({
            error:err.message,
        },{status:500})
    }
}