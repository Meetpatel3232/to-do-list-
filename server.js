const express=require("express");

const app=express();
app.use(express.json());
require("dotenv").config();
const TestRouter=require("./router/login.router");
const ListRouter=require("./router/list.router");

const Dbconnect=require("./dbwork/dbconnect");

const server=async  () => {
 app.use("/listApi",ListRouter);
 app.use("/api",TestRouter);
 await Dbconnect();
  await  app.listen(3000,()=>{
        console.log("server is running")
    })
}

server();