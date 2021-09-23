const model = require("../models/index");
const controller = {};

controller.getAll = async function (req, res) {
    try {
        await model.siswa.findAll().then((result) => {
            if (result.lenght > 0) {
                res.status(200).json({
                    message: "GET Method Siswa",
                    data: result
                });
            } else {
                res.status(200).json({
                    message: "Tidak ada data",
                    data: []
                });

            }
        })
    } catch (error) {
        res.status(404).json({
            message: error
        });
    }
}

module.exports = controller;