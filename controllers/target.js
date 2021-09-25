const model = require("../models/index");
const controller = {};

controller.getAllTarget = async function (req, res) {
    try {
        let target = await model.target.findAll()
        if (target.length > 0) {
            res.status(200).json({
                message: "GET Method Target",
                data: target
            });
        } else {
            res.status(200).json({
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

controller.post = async function(req, res) {
    try {
        let target = await model.target.create({
            judul_target: req.body.judul_target,
            deskripsi_target: req.body.deskripsi_target,
            nis: req.body.nis
        })
        res.status(200).json({
            message: "Berhasil menambahkan target",
            data: target
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

controller.delete = async function(req, res){
    try {
        let target = await model.target.destroy({
            where: {
                id_target: req.params.id_target
            }
        })
        res.status(200).json({
            message: "Berhasil Hapus Data Target"
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

module.exports = controller;