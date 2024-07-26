const express = require('express')
const router = express.Router()
const User = require('../models/UserModel.js')
const bcrypt = require('bcrypt')

router.post('/login', async (req, res) => {
    try {
        const enteredEmail = req.body.email
        const enteredPassword = req.body.password
        const matchedUser = await User.findOne({ email: enteredEmail })
        // console.log(matchedUser);

        const comparePass = await bcrypt.compare(enteredPassword, matchedUser.password)
        // console.log(comparePass);

        if (matchedUser != null && comparePass) {
            // res.status(200).json({success:true})
            res.send(matchedUser)
        }
        else {
            res.status(400).json({ success: false })
        }
    } catch (error) {
        console.error("Error during user validation:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
})

module.exports = router