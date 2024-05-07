const mongoose=require('mongoose')

const RatingSchema=new mongoose.Schema({
    rating: {
        type: Number,
        default: 0,
    },
    author:{
        type:String,
        required:true,
    },
    ottId:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true
    }
   
},{timestamps:true})

module.exports=mongoose.model("Rating",RatingSchema)