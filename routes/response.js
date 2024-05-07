
const express=require('express')
const router = express.Router();
const verifyToken = require('../verifyToken');
const Response = require('../models/Response');


//CREATE
router.post("/create",verifyToken,async(req,res)=>{
  try{
     const newResponse=new Response(req.body)
     const savedResponse=await newResponse.save()
     res.status(200).json(savedResponse)
  }
  catch(err){
    res.status(200).json(err)
  }
})


//UPDATE
router.put("/:id",verifyToken,async (req,res)=>{
    try{
       
        const updatedResponse=await Response.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedResponse)

    }
    catch(err){
        res.status(500).json(err)
    }
})

//DELETE
router.delete("/:id",verifyToken,async (req,res)=>{
    try{
        await Response.findByIdAndDelete(req.params.id)
         res.status(200).json("Comment has been deleted!")

    }
    catch(err){
        res.status(500).json(err)
    }
})


//GET specific ott
router.get("/:ottId",async (req,res)=>{
    try{
        const post=await Response.findById(req.params.id)
        res.status(200).json(post)
    }
    catch(err){
        res.status(500).json(err)
    }
})



//GET OTT RESPONSE
router.get("/ott/:ottId",verifyToken,async (req,res)=>{
    try{
        const Responses=await Response.find({ottId:req.params.ottId})
        res.status(200).json(Responses)
    }
    catch(err){
        res.status(500).json(err)
    }
})



module.exports=router