const express = require("express");
const router = express.Router();
const {putController}=require("../../../controller/projectController/putController/putController")
router.put("/offer/updateoffer/",(req,res)=>{
    putController(req,res); 
})
module.exports=router;