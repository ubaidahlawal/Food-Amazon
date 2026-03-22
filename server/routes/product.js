console.log("Product route loaded");

const express = require("express")
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
        console.log(error)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
         return res.status(404).json({message: "Product not found"});
        } 
        res.json(product);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Server error"});
    }
});

router.post("/", async (req, res) => {
    try {
        const { name, description, price, image } = req.body;
        const product = new Product({name, description, price, image});
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: "Server error"});
    }
});

module.exports = router;