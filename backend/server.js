
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();


app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


const TestRouter = require("./router/login.router");
const ListRouter = require("./router/list.router");

const Dbconnect = require("./dbwork/dbconnect");

const server = async () => {
    try {
        await Dbconnect();

        app.use("/api", ListRouter);
        app.use("/api", TestRouter);

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });

    } catch (error) {
        console.error("Server startup failed:", error);
    }
};

server();
