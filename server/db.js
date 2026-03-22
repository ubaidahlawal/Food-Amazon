require("dotenv").config();
const mongoose = require("mongoose");

// const mongoURL = "";

const  connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URL, {
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection error:", error);
        process.exit(1);
    }

};
// mongoose.connect(process.env.MONGO_URL)
module.exports = connectDB;
