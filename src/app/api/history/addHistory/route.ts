import connectDb from "@/dbconfig/dbconfig";
import { NextRequest,NextResponse } from "next/server";
import { history } from "@/models/history";
connectDb();
export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json();
        const {userId,vId,title,image}=reqBody;
        const historyData=await history.findOne({userId,vId});
        if(!historyData){
            const newData=new history({
                userId,
                vId,
                title,
                image,
                createdAt:Date.now()
            })
            const savedData=await newData.save();
            return NextResponse.json({
                message:"success! history is added",
                savedData
            })
        }
        historyData.createdAt=Date.now();
        await historyData.save();
        return NextResponse.json({
            message:"success! history is updated",
            historyData
        })
    } catch (err:any) {
        return NextResponse.json({
            error:err.message
        },
        {
            status:500
        })
    }
}