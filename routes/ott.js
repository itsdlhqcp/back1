
const express=require('express')
const router = express.Router();
const User=require('../models/User')
const bcrypt=require('bcrypt');
const Ott = require('../models/Ott');

const verifyToken = require('../verifyToken');


//CREATE
router.post("/create",verifyToken,async(req,res)=>{
  try{
     const newOtt=new Ott(req.body)
     const savedPost=await newOtt.save()
     res.status(200).json(savedPost)
  }
  catch(err){
    res.status(200).json(err)
  }
})


//UPDATE
router.put("/:id",verifyToken,async (req,res)=>{
    try{
       
        const updatedOtt=await Ott.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedOtt)

    }
    catch(err){
        res.status(500).json(err)
    }
})

//DELETE
router.delete("/:id",verifyToken ,async (req,res)=>{
    try{
        await Ott.findByIdAndDelete(req.params.id)
         res.status(200).json("Card has been deleted!")

    }
    catch(err){
        res.status(500).json(err)
    }
})


//GET post DETAILS
router.get("/:id",async (req,res)=>{
    try{
        const ott=await Ott.findById(req.params.id)
        res.status(200).json(ott)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET POSTS
router.get("/",async (req,res)=>{
    const query=req.query
    try{
        const searchFilter={
            title:{$regex:query.search, $options:"i"}
        }
        const otts=await Ott.find(query.search?searchFilter:null)
        res.status(200).json(otts)
    }
    catch(err){
        res.status(500).json(err)
    }
})


//GET USER POSTS
router.get("/user/:userId",async (req,res)=>{
    try{
        const otts=await Ott.find({userId:req.params.userId})
        res.status(200).json(otts)
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports=router