const express=require('express')
const router=express.Router()
const User=require('../models/UserModel.js')

router.get('/fetchUsers',async(req,res)=>{
    const allUsers=await User.find()
    res.send(allUsers)
})

module.exports=router