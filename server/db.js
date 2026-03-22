const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/foodamazon";

const  connectDB = async () => {

    try {
        await mongoose.connect(mongoURL, {
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection error:", error);
        process.exit(1);
    }

};

module.exports = connectDB;