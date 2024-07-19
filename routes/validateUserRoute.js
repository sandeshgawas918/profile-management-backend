const express = require('express')
const router = express.Router()
const User = require('../models/UserModel.js')
const bcrypt = require('bcrypt')

router.post('/login', async (req, res) => {
    const enteredEmail = req.body.email
    const enteredPassword = req.body.password
    const matchedUser = await User.findOne({ email: enteredEmail })
    // console.log(matchedUser);

    const comparePass = await bcrypt.compare(enteredPassword, matchedUser.password)

    if (matchedUser != null && comparePass) {
        // res.status(200).json({success:true})
        res.send(matchedUser)
    }
    else {
        res.status(400).json({ success: false })
        console.log('sandesh');
    }
})

module.exports = router