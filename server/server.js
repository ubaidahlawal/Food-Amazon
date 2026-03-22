const express = require("express");
const cors = require("cors");
const connectDB = require("./db");


const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Food Amazon API is running");
});

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const userRoutes = require("./routes/user");
app.use("/api/user", userRoutes);

const productRoutes = require("./routes/product");
app.use("/api/products", productRoutes);


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});