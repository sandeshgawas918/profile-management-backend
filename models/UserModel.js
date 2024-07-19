const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name: {
            type:String,
        },
        lname:{
            type:String
        },
        email: String,
        mobile: String,
        icon: String,
        password: String
    },
    { timestamps: true }
)

const User = mongoose.model('User', UserSchema)

module.exports = User