import mongoose from 'mongoose'

const wlSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    vId:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    createdAt:{
        type:Number,
        required:true
    }
})

 const wl= mongoose.models.wls|| mongoose.model("wls",wlSchema);
 export default wl