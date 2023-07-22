import mongoose from 'mongoose'

const favSchema=new mongoose.Schema({
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

 const fav= mongoose.models.favs|| mongoose.model("favs",favSchema);
 export default fav