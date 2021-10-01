const model = require("../models/motivasi");
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
                    data: motivasi
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