const router=require("express").Router();
const authentificationControllerAsIntern=require("../../controller/authentificationController/authentificationControllerAsIntern")
const authentificationControllerAsAdmin=require("../../controller/authentificationController/authentificationControllerAsAdmin")
const authentificationControllerAsSupervisor=require("../../controller/authentificationController/authentificationControllerAsSupervisor")
const authentificationController=require("../../controller/authentificationController/authentificationController")
router.post("/authentification/login/",(req,res)=>{
    authentificationController(req,res);
})
router.post("/authentification/loginAsIntern/",(req,res)=>{
    authentificationControllerAsIntern(req,res);
}) 
router.post("/authentification/loginAsAdmin/",(req,res)=>{
    authentificationControllerAsAdmin(req,res);
})
router.post("/authentification/loginAsSupervisor/",(req,res)=>{
    authentificationControllerAsSupervisor(req,res);
})

module.exports=router;