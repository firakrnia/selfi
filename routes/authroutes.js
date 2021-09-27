const express = require('express');
const router = express.Router();
const controller = require("../controllers/index");

router.post('/register/siswa', controller.auth.postRegister);

router.post('/login/siswa', controller.auth.postLogin);

module.exports = router;