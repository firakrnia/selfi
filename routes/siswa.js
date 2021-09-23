const express = require('express');
const router = express.Router();
const db = require("../config/database");
const controller = require("../controllers/index");

router.get('/siswa', controller.siswa.getAll);

router.post('/register/siswa', (req, res, next) => {
    const siswa = {
        nis: req.body.nis,
        nama: req.body.nama,
        id_kelas: req.body.id_kelas,
        jurusan: req.body.jurusan,
        nohp: req.body.nohp,
        password: req.body.password
    }
    // const newSiswa = new Model.siswa;
    // await newSiswa.save();
    // res.json(newSiswa);


    res.status(200).json({
        message: "POST Method Siswa",
        data: siswa
    });
})

router.get('/siswa/:nis', (req, res, next) => {
    const nis = req.params.nis;
    if (nis === '12345') {
        res.status(200).json({
            message: "NIS 12345"
        });
    } else {
        res.status(200).json({
            message: "NIS lain"
        });
    }
});

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