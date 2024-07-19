const app = require('./app.js')
const connectDB = require('./db/db.js')

connectDB()
    .then(() => {
        app.listen(process.env.NODE_PORT, () => {
            console.log(`server is running on http://localhost:${process.env.NODE_PORT}`);
        })
    })
    .catch(err => console.log(err))
