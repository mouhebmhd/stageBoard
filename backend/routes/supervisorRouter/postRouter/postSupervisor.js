const express = require("express");
const router = express.Router();
const {postController}=require("../../../controller/supervisorController/postController/postSupervisor")
router.post("/supervisor/addSupervisor/",(req,res)=>{
    postController(req,res);
})
module.exports=router;