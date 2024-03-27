const express = require("express");
const router = express.Router();
const {deleteIntern} = require("../../../controller/internController/deleteController/deleteController");

router.delete('/intern/deleteIntern/',(req,res)=>{
    deleteIntern(req,res);
});

module.exports = router;
