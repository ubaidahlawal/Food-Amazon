const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const signup = async (req, res) => {
    const {name, email, phone, password } = req.body;

    try {
        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json({ message: "User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await
        bcrypt.hash(password, salt);

        user = new User ({
            name,
            email,
            phone,
            password: hashedPassword,
        });

        await user.save();

        res.status(201).json({
            message: "User created successfully",
            token: generateToken(user._id),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
};

const login = async(req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: "Invalid"});
        }
        const isMatch = await
        bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({message: "Incorrect"});
        }
        res.status(200).json({
            message: "Login successful",
            token: generateToken(user._id),
        });
    } catch(error) {
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
};

module.exports = {signup, login};

