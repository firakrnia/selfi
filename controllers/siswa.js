const model = require("../models/index");
const controller = {};

controller.getAllSiswa = async function (req, res) {
    try {
        let siswa = await model.siswa.findAll()
            if (siswa.length > 0) {
                res.status(200).json({
                    success: "true",
                    message: "GET Method Siswa",
                    data: siswa
                });
            } else {
                res.status(200).json({
                    success: "false",
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

controller.getIdSiswa = async function (req, res) {
    try {
        let siswa = await model.siswa.findAll({
            where: {
                nis: req.params.nis
            }
        })
            if (siswa.length > 0) {
                res.status(200).json({
                    success: "true",
                    message: "Data Siswa Ditemukan",
                    data: siswa
                });
            } else {
                res.status(200).json({
                    success: "false",
                    message: "Data Siswa Tidak Ditemukan",
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