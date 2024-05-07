const { default: mongoose } = require("mongoose");

const ReleaseSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
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
    }
},{timestamps: true})

module.exports=mongoose.model("Release",ReleaseSchema)