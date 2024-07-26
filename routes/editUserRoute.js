const express = require('express')
const router = express.Router()
const User = require('../models/UserModel.js')
const upload = require('../middleware/multer.js')
const cloudinary = require('../utils/cloudinary.js')
const fs=require('fs')

router.put('/updateUser/:id', upload.single('icon'), async (req, res) => {
    const { id } = req.params
    if (req.file) {
        const imagePath = req.file.path
        console.log(id);

        const editedImage = await cloudinary.uploader.upload(imagePath, {
            folder: 'profile_management_prod'
        })

        const userBEforeUpdate = await User.findOneAndUpdate({ _id: id },
            {
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                lname: req.body.lname,
                icon: editedImage.url,
            })
        res.send(userBEforeUpdate)

        fs.unlinkSync(imagePath)
    }
    else {
        const currentUser = await User.findOne({ _id: id })
        const userBEforeUpdate = await User.findOneAndUpdate({ _id: id },
            {
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                lname: req.body.lname,
                icon: currentUser.icon,
            })
        res.send(userBEforeUpdate)
    }

})

module.exports = router