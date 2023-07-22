import mongoose from 'mongoose'

const historySchema=new mongoose.Schema({
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

 const history=mongoose.models.histories || mongoose.model("histories",historySchema);
 export default history