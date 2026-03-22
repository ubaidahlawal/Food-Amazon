const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
        type: String, 
        required: true,
    },
        description: {
        type: String, 
        required: true,
    },
        price: {
        type: Number, 
        required: true,
    },
        Image: {
            type: String,
            required: true,
        },
    });

    // const Product = mongoose.model("Product", productSchema);
    // module.exports = Product;
    module.exports = mongoose.model("Product", productSchema);