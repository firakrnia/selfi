const model = require("../models/index");
const {Op} = require("sequelize");
const controller = {};

controller.getAllMotivasi = async function (req, res) {
    try {
        let motivasi = await model.motivasi.findAll({
            attributes: ["sampul", "judul"]
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

controller.getSearch = async function (req, res) {
    const search = req.query.keyword;
    try {
        let motivasi = await model.motivasi.findAll({
            where: {
                [Op.or]: [
                {
                    judul: {
                        [Op.like]: "%"+search+"%"
                    }
                    
                },
                {
                    deskripsi: {
                        [Op.like]: "%"+search+"%"
                    }
                }]
            }
        });
        
        if (motivasi.length > 0) {
            res.status(200).json({
                message: "Buku ditemukan",
                data: motivasi
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

module.exports = controller;