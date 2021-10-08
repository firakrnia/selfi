const db = require("../config/database");
const model = require("../models/index");
// const sequelize = require('sequelize');
const controller = {};


controller.getAllJadwal = async function (req, res) {
    try {
        // let jadwal = await model.jadwal.findAll({
        //     where: {
        //         hari: req.params.hari
        //     },
        //     include: [{model: model.kelas}, {model: model.mapel}],
        
        //     attributes: ["hari","waktu_dimulai","waktu_selesai","mapel.nama_mapel","kela.nama"],
        // })
        let hari = req.params.hari;
        let jadwal = await db.query("SELECT jadwal.hari, jadwal.waktu_dimulai, jadwal.waktu_selesai, jadwal.id_kelas, jadwal.id_mapel, mapel.nama_mapel, kelas.nama FROM jadwal JOIN mapel ON jadwal.id_mapel = mapel.id_mapel JOIN kelas ON jadwal.id_kelas = kelas.id_kelas")
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