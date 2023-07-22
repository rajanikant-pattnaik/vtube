import connectDb from "@/dbconfig/dbconfig";
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/user";
connectDb();
export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json()
        const {email,password}=reqBody;

        const user=await User.findOne({email})
        if(!user){
            return NextResponse.json({
                error:"user dosent exist"
            },{status:400})
        }
        if(user.password!==password){
            return NextResponse.json({
                error:"Password is incorrect"
            },{status:401})
        }
        return NextResponse.json({
            message:"User successfully login",
            user
        })
        
    } catch (err:any) {
        console.log(err)
        return NextResponse.json({error:err.message},{status:500})
    }
}