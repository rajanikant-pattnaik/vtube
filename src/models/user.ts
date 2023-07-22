import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
   username:{
    type:String,
    required:[true,"username must be there"],
   },
   email:{
    type:String,
    required:[true,"username must be there"],
    unique:true
   },
   password:{
    type:String,
    required:[true,"Please provid a password"],
    unique:true
   },
   createdAt:{
    type:Number,
    required:[true,"Date is required"]
   }
})

const User=mongoose.models.users|| mongoose.model("users",userSchema)

export default User;