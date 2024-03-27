const express = require("express");
const router = express.Router();
const getInternController = require("../../../controller/internController/getController/getController");

router.get('/intern/getAllInterns', getInternController.getInterns);
router.get('/intern/getIntern/', getInternController.getIntern);

module.exports = router;
