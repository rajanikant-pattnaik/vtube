import connectDb from "@/dbconfig/dbconfig";
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/user";
connectDb();
export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json()
        const {username,email,password}=reqBody;

        const user=await User.findOne({email})
        if(user){
            return NextResponse.json({error:"User already exist"},{status:400})
        }
        const newUser=new User({
            username,
            email,
            password,
            createdAt:Date.now()
        })
        const savedUser=await newUser.save()
        return NextResponse.json({
            message:"User is created successfully",
            success:true,
            savedUser
        })
    } catch (err:any) {
        return NextResponse.json({error:err.message},{status:500})
    }
}