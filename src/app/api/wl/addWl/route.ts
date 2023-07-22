import connectDb from "@/dbconfig/dbconfig";
import { NextRequest,NextResponse } from "next/server";
import wl from "@/models/watch-later";
connectDb();
export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json();
        const {userId,vId,title,image}=reqBody;
        const wlData=await wl.findOne({userId,vId});
        if(!wlData){
            const newData=new wl({
                userId,
                vId,
                title,
                image,
                createdAt:Date.now()
            })
            const savedData=await newData.save();
            return NextResponse.json({
                message:"success! wl is added",
                savedData
            })
        }
        await wlData.deleteOne();
        return NextResponse.json({
            message:"success! wl is deleted",
            wlData
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