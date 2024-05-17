const express = require("express");
const router = express.Router();
const {postController}=require("../../../controller/projectController/postController/postController")
router.post("/project/addProject/",(req,res)=>{
    postController(req,res);
})
module.exports=router;