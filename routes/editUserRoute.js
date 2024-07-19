const express = require('express')
const router = express.Router()
const User = require('../models/UserModel.js')

router.put('/updateUser/:id', async (req, res) => {
    const { id } = req.params
    const userBEforeUpdate = await User.findOneAndUpdate({ _id: id },
        {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            lname:req.body.lname,
            icon: req.body.icon || 'https://cdn-icons-png.flaticon.com/512/219/219988.png',
        })
    res.send(userBEforeUpdate)
})

module.exports = router