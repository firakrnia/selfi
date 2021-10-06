const model = require("../models/index");
const controller = {};

controller.getAllMotivasi = async function (req, res) {
    try {
        let motivasi = await model.motivasi.findAll({
            attributes: ["sampul_artikel", "judul_artikel"]
        })
            if (motivasi.length > 0 ) {
                res.status(200).json({
                    success: true,
                    message: 'GET Method Motivasi',
                    motivasi
                });
            } else {
                res.status(200).json({
                    success: false,
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

controller.getAllMotivasiById = async function (req, res) {
    try {
        let motivasi = await model.motivasi.findAll({
            where: {
                id_motivasi: req.params.id_motivasi
            }
        })
            if (motivasi.length > 0 ) {
                res.status(200).json({
                    success: true,
                    message: 'GET Method Motivasi',
                    motivasi
                });
            } else {
                res.status(200).json({
                    success: false,
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