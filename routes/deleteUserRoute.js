const express = require('express')
const router = express.Router()
const User = require('../models/UserModel.js')

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params
    const currentUser = await User.findOne({_id:id})
    const deletedUser = await User.deleteOne({ _id: id })
    res.send(currentUser)
    console.log('Deleted user is : \n',currentUser,  deletedUser, );
})

module.exports = router