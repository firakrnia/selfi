const express = require('express');
const router = express.Router();
const controller = require("../controllers/index");

router.get('/motivasi', controller.motivasi.getAllMotivasi);

router.get('/motivasi/:id_motivasi', controller.motivasi.getAllMotivasiById);

module.exports = router;