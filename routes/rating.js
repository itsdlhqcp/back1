
const express=require('express')
const router = express.Router();
const Comment=require('../models/Comment');
const verifyToken = require('../verifyToken');
const Rating = require('../models/Rating');


//CREATE
router.post("/create",verifyToken,async(req,res)=>{
  try{
     const newRating=new Rating(req.body)
     const savedComment=await newRating.save()
     res.status(200).json(savedComment)
  }
  catch(err){
    res.status(200).json(err)
  }
})


//UPDATE
router.put("/:id",verifyToken,async (req,res)=>{
    try{
       
        const updatedRating=await Comment.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedRating)

    }
    catch(err){
        res.status(500).json(err)
    }
})

//DELETE
router.delete("/:id",verifyToken,async (req,res)=>{
    try{
        await Rating.findByIdAndDelete(req.params.id)
         res.status(200).json("Rating has been deleted!")

    }
    catch(err){
        res.status(500).json(err)
    }
})




//GET OTT RATING
router.get("/rates/:ottId",verifyToken,async (req,res)=>{
    try{
        const rating=await Rating.find({ottId:req.params.ottId})
        res.status(200).json(rating)
    }
    catch(err){
        res.status(500).json(err)
    }
})



module.exports=router