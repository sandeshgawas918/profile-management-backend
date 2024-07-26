const express = require('express')
const router = express.Router()
const User = require('../models/UserModel.js')
const bcrypt = require('bcrypt')
const upload = require('../middleware/multer.js')
const cloudinary = require('../utils/cloudinary.js')
const fs=require('fs')


router.post('/register', upload.single('icon'), async (req, res) => {
    // const { email, mobile, icon, password } = req.body
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)

        if (req.file) {
            const imagePath = req.file.path

            console.log(imagePath)

            const uploadedImg = await cloudinary.uploader.upload(imagePath, {
                folder: "profile_management_prod"
            })

            console.log(uploadedImg)

            const myUser = await User.create({
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                lname: req.body.lname,
                icon: uploadedImg.url,
                password: hashPassword
            })
            res.send(myUser)

            fs.unlinkSync(imagePath)
        }
        else {
            const myUser = await User.create({
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                lname: req.body.lname,
                password: hashPassword
            })
            res.send(myUser)
        }

    } catch (error) {
        console.error("Error during user registration:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }

})

module.exports = router

