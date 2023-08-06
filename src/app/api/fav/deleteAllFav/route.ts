import connectDb from "@/dbconfig/dbconfig";
import { NextRequest,NextResponse } from "next/server";
import fav from "@/models/fav";
connectDb();
export async function POST(request:NextRequest){
    try {
        const {userid}=await request.json()
        await fav.deleteMany({userId:userid});
        return NextResponse.json({
            message:"successfully deleted fav of everything",
            success:true
        },{status:200})

    } catch (error:any) {
        console.log(error.message);
        NextResponse.json({
            message:"something went wwrong",
            success:false,
            error
        },{status:500})
    }
}