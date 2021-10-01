const model = require("../models/index");
const sequelize = require('sequelize');
const controller = {};


controller.getAllJadwal = async function (req, res) {
    try {
        let siswa = await model.jadwal.findAll({
            where:{
                
            },
            order: sequelize.col('waktu_dimulai'),
        })
            if (siswa.length > 0) {
                res.status(200).json({
                    success: "true",
                    message: "Get Jadwal",
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