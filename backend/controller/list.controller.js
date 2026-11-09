
const List = require("../model/list.model");

const addList = async (req, res) => {
    try {
        console.log("Authenticated user:", req.user);

        const { text } = req.body;
        const userid = req.user?.id;

        if (!userid) {
            return res.status(401).json({
                success: false,
                message: "User ID missing from token"
            });
        }

        const list = await List.create({
            userid,
            text,
            completed: false
        });

        return res.status(201).json({
            success: true,
            message: "Task added successfully",
            data: list
        });

    } catch (error) {
        console.error("ADD LIST ERROR:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


const getList = async (req, res) => {
    try {
        const userid = req.user.id;

        const list = await List.find({ userid })
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            message: "Tasks fetched successfully",
            data: list
        });

    } catch (error) {
        console.error("Get tasks error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = {
    getList,
    addList
};
