require('dotenv').config()
const express=require('express')
const app=express()
const cors=require('cors')
const path=require('path')

const createUserRouter=require('./routes/createUserRoute.js')
const validateUserRouter=require('./routes/validateUserRoute.js')
const getAllUsersRouter=require('./routes/fetchAllUsersRoute.js')
const deleteUserRouter=require('./routes/deleteUserRoute.js')
const getUserRouter=require('./routes/getUserRoute.js')
const updateUserRouter=require('./routes/editUserRoute.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/api',createUserRouter)
app.use('/api',validateUserRouter)
app.use('/api',getAllUsersRouter)
app.use('/api',deleteUserRouter)
app.use('/api',getUserRouter)
app.use('/api',updateUserRouter)

app.get('/',(req,res)=>{
    res.send('this is my profile application')
})

module.exports=app