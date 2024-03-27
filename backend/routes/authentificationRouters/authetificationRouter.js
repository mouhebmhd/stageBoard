const router=require("express").Router();
const {authentificationController}=require("../../controller/authentificationController/authentificationController")
router.post("/authentification/login/",(req,res)=>{
    authentificationController(req,res);
})
module.exports=router;