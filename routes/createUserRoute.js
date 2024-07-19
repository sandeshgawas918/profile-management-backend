const express = require('express')
const router = express.Router()
const User = require('../models/UserModel.js')
const bcrypt = require('bcrypt')
// const multer  = require('multer')
// const upload = multer()


router.post('/register', async (req, res) => {
    // const { email, mobile, icon, password } = req.body
    const hashPassword = await bcrypt.hash(req.body.password, 10)
    const myUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        lname: req.body.lname,
        icon: req.body.icon || 'https://cdn-icons-png.flaticon.com/512/219/219988.png',
        password: hashPassword
    })
    res.send(myUser)
    console.log(myUser);
})

module.exports = router

