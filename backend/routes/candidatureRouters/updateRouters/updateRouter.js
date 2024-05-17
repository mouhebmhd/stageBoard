const express = require("express");
const router = express.Router();
const {updateController} = require("../../../controller/candidatureController/updateController/updateController");
router.put('/candidature/updateCandidature/',async (req,res)=>{
   
    updateController(req,res);
    
})
module.exports = router;
