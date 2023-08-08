import connectDb from "@/dbconfig/dbconfig";
import { NextRequest,NextResponse } from "next/server";
import wl from "@/models/watch-later";
connectDb();
export async function POST(request:NextRequest){
    try {
        const {userid}=await request.json()
        await wl.deleteMany({userId:userid});
        return NextResponse.json({
            message:"successfully wl history of everything",
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