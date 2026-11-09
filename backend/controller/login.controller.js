const User = require("../model/User.model");
const jwt=require("jsonwebtoken");

require("dotenv").config();
const bcrypt=require("bcrypt");
const login = async (req, res) => {
 
try {
    const { username, email, password } = req.body;

    console.log("Registration request received:", { username, email });

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(409).json({
            success: false,
            message: "User already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

   
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });

 
    const token = jwt.sign(
        {
            id: user._id,
            username: user.username,
            email: user.email
        },
        process.env.Key,
        { expiresIn: "1d" }
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000
    });

    return res.status(201).json({
        success: true,
        message: "Registration successful"
    });

} catch (error) {
    console.error("Registration error:", error);

    return res.status(500).json({
        success: false,
        message: "Internal server error"
    });
}

    
};

module.exports = login;