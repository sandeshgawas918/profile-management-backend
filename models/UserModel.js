const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required:true
        },
        lname:{
            type:String
        },
        email: {
            type:String,
            required:true,
            unique:true
        },
        mobile: {
            type:String,
            unique:true
        },
        icon: {
            type:String,
            default:'http://res.cloudinary.com/dojldbdgc/image/upload/v1721923621/profile_management_prod/dysmuro4y059sdy3ibaj.jpg'
        },
        password: {
            type:String,
            required:true
        }
    },
    { timestamps: true }
)

const User = mongoose.model('User', UserSchema)

module.exports = User