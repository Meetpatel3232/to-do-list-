const express=require("express");
const Data=require("../controller/test.controller");
const router=express.Router();

router.get("/data",Data);

module.exports=router;