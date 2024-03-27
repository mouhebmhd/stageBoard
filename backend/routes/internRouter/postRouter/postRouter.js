const express = require("express");
const router = express.Router();
const {postController}=require("../../../controller/internController/postController/postController")
router.post("/intern/addIntern/",(req,res)=>{
    postController(req,res);
})
module.exports=router;