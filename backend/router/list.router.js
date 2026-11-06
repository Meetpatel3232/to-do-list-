const express=require("express");
const {getList,addList}=require("../controller/list.controller");
const router=express.Router();
router.get("/getList",getList);
router.post("/addList",addList);

module.exports=router;