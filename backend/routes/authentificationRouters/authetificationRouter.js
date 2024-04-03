const router=require("express").Router();
const {authentificationControllerAsIntern}=require("../../controller/authentificationController/authentificationControllerAsIntern")
const {authentificationControllerAsAdmin}=require("../../controller/authentificationController/authentificationControllerAsAdmin")
router.post("/authentification/loginAsIntern/",(req,res)=>{
    authentificationControllerAsIntern(req,res);
})
router.post("/authentification/loginAsAdmin/",(req,res)=>{
    authentificationControllerAsAdmin(req,res);
})
module.exports=router;