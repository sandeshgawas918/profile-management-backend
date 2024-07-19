const express=require('express')
const router=express.Router()
const User=require('../models/UserModel.js')

router.delete('/delete/:id',async(req,res)=>{
    const {id}=req.params
    const deletedUser=await User.deleteOne({_id:id})
    res.send(deletedUser)
    console.log(id);
})

module.exports=router