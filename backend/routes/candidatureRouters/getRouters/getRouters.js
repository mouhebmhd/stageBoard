const express = require("express");
const router = express.Router();
const {getController} = require("../../../controller/candidatureController/getController/getController");
const {validateToken}=require("../../../services/authentification/validateTokenService")
router.get('/candidature/getAllCandidatures/',async (req,res)=>{
   
    getController(req,res);
    
})
module.exports = router;
