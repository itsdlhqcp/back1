const mongoose=require('mongoose')

const OttSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    date:{
        type:String,
        required:true
    },
    categories:{
        type:Array,
        
    },
    photo:{
        type:String,
        required:false,
        
    },
    username:{
        type:String,
        required:true,  
    },
    userId:{
        type:String,
        required:true,  
    },
    averageRating:{
        type:String,
        default:4,  
    }
},{timestamps: true})

module.exports=mongoose.model("Ott",OttSchema)