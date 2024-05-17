const express = require("express");
const router = express.Router();
const {deleteSupervisor} = require("../../../controller/supervisorController/deleteController/deleteController");

router.delete('/supervisor/deleteSupervisor/',(req,res)=>{
    deleteSupervisor(req,res);
});

module.exports = router;
