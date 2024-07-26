const mongoose = require('mongoose');
const DatabaseName = 'profilemanagement'

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_DB}/${DatabaseName}`)
    } catch (error) {
        console.log('error on db.js file =>', error);
    }
}

module.exports = connectDB