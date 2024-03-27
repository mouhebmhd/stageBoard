const express=require("express");
const router=express.Router();
const {updateController}=require("../../../controller/internController/updateController/updateController")
router.put("/intern/updateIntern/",(req,res)=>{
     updateController(req,res);
   
})
module.exports=router;
