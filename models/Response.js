const { default: mongoose } = require("mongoose");


const ResponseSchema=new mongoose.Schema({
    response:{
        type:String,
        required:true,
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

module.exports=mongoose.model("Response",ResponseSchema)