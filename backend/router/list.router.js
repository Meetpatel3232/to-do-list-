const express=require("express");
const {getList,addList}=require("../controller/list.controller");
const router=express.Router();
const verifyToken=require("../middleware/verifyToken");
router.get("/getList",verifyToken,getList);
router.post("/addList",verifyToken,addList);

module.exports=router;