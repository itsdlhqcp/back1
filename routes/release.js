
const express=require('express')
const router = express.Router();
const verifyToken = require('../verifyToken');
const Relase = require('../models/Relase');


//CREATE
router.post("/create",verifyToken,async(req,res)=>{
  try{
     const newRelease=new Relase(req.body)
     const savedPost=await newRelease.save()
     res.status(200).json(savedPost)
  }
  catch(err){
    res.status(200).json(err)
  }
})


//UPDATE
router.put("/:id",verifyToken,async (req,res)=>{
    try{
       
        const updatedRelease=await Relase.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedRelease)

    }
    catch(err){
        res.status(500).json(err)
    }
})

//DELETE
router.delete("/:id",verifyToken ,async (req,res)=>{
    try{
        await Relase.findByIdAndDelete(req.params.id)
         res.status(200).json("Card has been deleted!")

    }
    catch(err){
        res.status(500).json(err)
    }
})


//GET post DETAILS
router.get("/:id",async (req,res)=>{
    try{
        const deleteRelease=await Relase.findById(req.params.id)
        res.status(200).json(deleteRelease)
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
        const getRelease=await Relase.find(query.search?searchFilter:null)
        res.status(200).json(getRelease)
    }
    catch(err){
        res.status(500).json(err)
    }
})


//GET USER POSTS
router.get("/user/:userId",async (req,res)=>{
    try{
        const getUserRelease=await Relase.find({userId:req.params.userId})
        res.status(200).json(getUserRelease)
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports=router