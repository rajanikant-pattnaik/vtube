import connectDb from "@/dbconfig/dbconfig";
import { NextRequest,NextResponse } from "next/server";
import history from "@/models/history";
connectDb();
export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json();
        const {_id}=reqBody;
        const histToken = await history.findById(_id);
        await histToken?.deleteOne();
        return NextResponse.json({
            message:"Deleted successfully",
            _id
        },{status:200})
    } catch (err:any) {
        return NextResponse.json({
            error:err.message
        },
        {
            status:500
        })
    }
}