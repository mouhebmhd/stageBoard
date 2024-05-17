const express = require("express");
const router = express.Router();
const {getProjectControllerById,getProjectControllerByInternId,getSupervisorControllerById,getProjectsController}=require("../../../controller/projectController/getController/getController")
router.get("/project/getProjects/",(req,res)=>{
    getProjectsController(req,res);
})
router.get("/project/getProject/",(req,res)=>{
    getProjectControllerById(req,res);
})
router.get("/project/getProjectsByInternId/",(req,res)=>{
    getProjectControllerByInternId(req,res);
})
router.get("/project/getProjectsBySupervisorId/",(req,res)=>{
    getSupervisorControllerById(req,res);
})
module.exports=router;