const model = require("../models/index");
const controller = {};

controller.getAllKonsul = async function (req, res) {
    try {
        let konsul = await model.konseling.findAll()
            if (konsul.length > 0) {
                res.status(200).json({
                    success: true,
                    message: 'GET Method Konsul',
                    konsul
                });
            } else { 
                res.status(200).json({
                    success: false,
                    message: "Tidak ada data",
                    data : []
                });
            }
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

module.exports = controller;