const model = require("../models/index");
const controller = {};
const {Op} = require("sequelize");

controller.getAllBuku = async function (req, res) {
    try {
        let buku = await model.buku.findAll()
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

controller.getSearchBuku = async function (req, res) {
    const search = req.query.keyword;
    try {
        let buku = await model.buku.findAll({
            where: {
                [Op.or]: [
                {
                    judul: {
                        [Op.like]: "%"+search+"%"
                    }
                    
                },
                {
                    penulis: {
                        [Op.like]: "%"+search+"%"
                    }
                },
                {
                    penerbit: {
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