const model = require("../models/index");
// const sequelize = require('sequelize');
const controller = {};


controller.getAllJadwal = async function (req, res) {
    try {
        let jadwal = await model.jadwal.findAll({
            
            include: [{model: model.mapel}, {model: model.kelas}],
            where:{
                hari: req.params.hari
            },
            order: [["waktu_dimulai", "ASC"]],
        })
            if (jadwal.length > 0) {
                res.status(200).json({
                    success: "true",
                    message: "Get Jadwal",
                    data: jadwal
                });
            } else {
                res.status(200).json({
                    success: "false",
                    message: "Data Jadwal Tidak Tersedia",
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