const mongoose=require('mongoose')

const connectDB=async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_DB}/profilemanagement`)
    } catch (error) {
        console.log('error on db.js =>',error);
    }
}

module.exports=connectDB