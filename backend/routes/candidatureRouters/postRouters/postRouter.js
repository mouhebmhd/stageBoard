const express = require("express");
const router = express.Router();
const {postController} = require("../../../controller/candidatureController/postController/postController");
const {validateToken}=require("../../../services/authentification/validateTokenService")
router.post('/candidature/addCandidature/',(req,res)=>{
   
    const decode=validateToken(req.body.internToken,process.env.SECRET_KEY)
    req.body.internId=decode.decoded.userId ;
    postController(req,res);
});

module.exports = router;
