const express=require("express");
const router=express.Router();
const {updateController}=require("../../../controller/supervisorController/updateController/updateController")
router.put("/supervisor/updateSupervisor/",(req,res)=>{
     updateController(req,res);
   
})
module.exports=router;
