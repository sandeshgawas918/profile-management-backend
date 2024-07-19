const express=require('express')
const router=express.Router()
const User=require('../models/UserModel.js')

router.get('/getUser/:id',async(req,res)=>{
    const {id}=req.params
    const myUser=await User.findOne({_id:id})
    res.send(myUser)
})

module.exports=router