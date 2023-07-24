import connectDb from "@/dbconfig/dbconfig";
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from 'bcrypt'
connectDb();
export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json()
        const {username,email,password}=reqBody;

        const user=await User.findOne({email})
        if(user){
            return NextResponse.json({error:"User already exist"},{status:400})
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt)
        const newUser=new User({
            username,
            email,
            password:hashedPassword,
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