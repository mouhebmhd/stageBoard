const express = require("express");
const router = express.Router();
const getSupervisorController = require("../../../controller/supervisorController/getController/getController");

router.get('/supervisor/getAllSupervisors',getSupervisorController.getSupervisors);
router.get('/supervisor/getSupervisorById/', getSupervisorController.getSupervisorByID);

module.exports = router;
