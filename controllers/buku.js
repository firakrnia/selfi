const model = require("../models/index");
const controller = {};
const {Op} = require("sequelize");
const joi = require('joi')

controller.getAllBuku = async function (req, res) {
    try {
        let buku = await model.buku.findAll({
            attributes: ["sampul", "judul", "penulis", "lampiran"]
        })
        if (buku.length > 0) {
            res.status(200).json({
                success: true,
                message: "GET Method Buku",
                data: buku
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

controller.getAllBukuByKategori = async function (req, res) {
    try {
        let buku = await model.buku.findAll({
            attributes: ["sampul", "judul", "penulis", "lampiran"],
            where: {
                kategori: req.params.kategori
            }
        })
        if (buku.length > 0) {
            res.status(200).json({
                success: true,
                message: "GET Method Buku",
                data: buku
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
        let buku = await model.buku.findAll({
            attributes: ["deskripsi","judul","penulis","kategori"],
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
                },
                {
                    penulis: {
                        [Op.like]: "%"+search+"%"
                    }
                },
                {
                    kategori: {
                        [Op.like]: "%"+search+"%"
                    }
                }]
            }
        });
        
        if (buku.length > 0) {
            res.status(200).json({
                message: "Buku ditemukan",
                data: buku
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