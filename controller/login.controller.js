const User = require("../model/User.model");
const jwt=require("jsonwebtoken");

require("dotenv").config();
const bcrypt=require("bcrypt");
const login = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    console.log("Registration request received:", { username, email });

    const user = await User.findOne({ email });

    if (user) {
        return res.status(409).json({
            success: false,
            message: "User already exists"
        });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    console.log("Password hashed successfully");

    await User.create({
        username,
        email,
        password: hashedpassword
    });

    const token = jwt.sign(
        { username, email },
        process.env.Key
    );

    res.cookie("token", token, {
        httpOnly: true
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