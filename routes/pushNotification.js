const express = require('express');
const router = express.Router();
const controller = require("../controllers/index");
//coba

router.post('/fcm', controller.pushNotification.push);

module.exports = router;