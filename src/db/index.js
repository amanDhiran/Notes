const mongoose = require('mongoose')

async function connectDb(){
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        console.log("db connected");

    } catch (error) {
        console.log("db conection error", error);
    }
}

module.exports = connectDb;