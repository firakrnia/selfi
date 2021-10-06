const model = require("../models/index");
const controller = {};

controller.getAllBuku = async function (req, res) {
    try {
        let buku = await model.buku.findAll({
            attributes: ["sampul_buku","judul_buku","penulis_buku","lampiran_buku"]
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

controller.searchBuku = async function(req, res) {
    const search = req.query.keyword;
    try {
        let buku = await model.buku.findAll({
            where: {
                [Op.like]: "%" +search+ "%"
            }
        })
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