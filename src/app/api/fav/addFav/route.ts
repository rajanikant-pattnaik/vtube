import connectDb from "@/dbconfig/dbconfig";
import { NextRequest,NextResponse } from "next/server";
import fav from "@/models/fav";
connectDb();
export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json();
        const {userId,vId,title,image}=reqBody;
        const favData=await fav.findOne({userId,vId});
        if(!favData){
            const newData=new fav({
                userId,
                vId,
                title,
                image,
                createdAt:Date.now()
            })
            const savedData=await newData.save();
            return NextResponse.json({
                message:"success! fav is added",
                savedData
            })
        }
        await favData.deleteOne();
        return NextResponse.json({
            message:"success! fav is deleted",
            favData
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