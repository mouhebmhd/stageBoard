const express = require("express");
const router = express.Router();
const {deleteProject}=require("../../../controller/projectController/deleteController/deleteController")
router.delete("/project/deleteProject/",(req,res)=>{
    deleteProject(req,res);
})

module.exports=router;