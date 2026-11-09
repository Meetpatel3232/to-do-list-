const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    try {
        console.log("Cookies:", req.cookies);

        const token = req.cookies?.token;

        console.log("Token:", token);

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: Token missing"
            });
        }

        const decoded = jwt.verify(token, process.env.Key);

        req.user = decoded;

        console.log("Authenticated user:", req.user);

        next();

    } catch (error) {
        console.log("JWT Error:", error.message);

        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};

module.exports = verifyToken;