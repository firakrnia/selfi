const express = require('express');
const router = express.Router();
const controller = require("../controllers/index");
// const middleware = require("../middleware/auth");

router.get('/siswa', controller.siswa.getAllSiswa);

router.get('/siswa/:nis', controller.siswa.getIdSiswa);

router.put('/siswa', (req, res, next) => {
    res.status(200).json({
        message: "PUT Method Siswa"
    });
})

router.delete('/siswa', (req, res, next) => {
    res.status(200).json({
        message: "DELETE Method Siswa"
    });
})

module.exports = router;