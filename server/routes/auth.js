// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const User = require('../models/User');


// router.post("/signup", async (req, res) => {
//     const {name, email, phone, password} = req.body;

//     try {
//         let user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({message: "User already exists"});
//         }
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt); 

//         user = new User({
//             name,
//             email,
//             phone,
//             password: hashedPassword
//         });
//         await user.save();

//         res.status(201).json({message: "User created successfully"});
//     } catch (error) {
//         console.lof(error);
//         res.status(500).json({message: "Server error"});
//     }
// });

// router.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });

//         if(!user) {
//             return res.status(400).json({ message: "Invalid email or password"});
//         }

//         const isMatch = await 
//         bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(400).json({message: "Invalid email or password"});
//         }
//         res.status(200).json({
//             message: "Login successful",
//             user: {
//                 name: user.name,
//                 email: user.email
//             }
//         });
//     } catch (error) {
//         res.status(500).json({message: "Server error"});
//     }

// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const {signup, login} = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;