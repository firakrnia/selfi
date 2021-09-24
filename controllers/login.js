const model = require("../models/index");
const controller = {};

controller.postRegister = async function (req, res) {
    try {
        let siswa = await model.siswa.create({
            nis: req.body.nis,
            nama: req.body.nama,
            id_kelas: req.body.id_kelas,
            jurusan: req.body.jurusan,
            nohp: req.body.nohp,
            password: req.body.password
        })
            res.status(200).json({
                message: "Data siswa berhasil ditambahkan",
                data: siswa
            })

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

controller.postLogin = async function (req, res) {
    try {
        let siswa = await model.siswa.findAll()
            if (siswa.length > 0) {
                res.status(200).json({
                    message: "GET Method Siswa",
                    data: siswa
                });
            } else {
                res.status(200).json({
                    message: "Tidak ada data",
                    data: []
                });

            }
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

module.exports = controller;