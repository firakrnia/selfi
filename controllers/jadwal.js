const db = require("../config/database");
const { kelas } = require("../models/index");
const model = require("../models/index");
const sequelize = require('sequelize');
const controller = {};


controller.getAllJadwal = async function (req, res) {
    try {
        let jadwal = await model.jadwal.findAll({
            
            include: [{model: model.mapel}, {model: model.kelas}],
            where:{
                id_kelas: req.params.id_kelas,
                hari: req.params.hari
            },
            order: [["waktu_dimulai", "ASC"]]
        })
        // let hari = req.params.hari;
        // let jadwal = await db.query("SELECT jadwal.hari, jadwal.waktu_dimulai, jadwal.waktu_selesai, jadwal.id_kelas, jadwal.id_mapel, mapel.nama_mapel, kelas.nama FROM jadwal JOIN mapel ON jadwal.id_mapel = mapel.id_mapel JOIN kelas ON jadwal.id_kelas = kelas.id_kelas WHERE jadwal.hari = '"+hari+"'" );
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