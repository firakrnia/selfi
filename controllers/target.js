const model = require("../models/index");
const controller = {};

controller.getAllTarget = async function (req, res) {
    try {
        let target = await model.target.findAll({
            where: {
                nis: req.params.nis
            }
        })
        if (target.length > 0) {
            res.status(200).json({
                success: true,
                message: "GET Method Target",
                data: target
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

controller.getTarget = async function (res, req) {
    try {
        let target =  await model.target.findAll({
            where: {
                nis: req.params.nis
            },
            limit: 3
        })
        if(target.length > 0) {
            res.status(200).json({
                success: true,
                message: "GET Method Target",
                data: target
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

// controller.getAllTargetByNis = async function (req, res) {
//     try {
//         let target = await model.target.findAll({
//             where: {
//                 nis: req.params.nis
//             }
//         })
//         if (target.length > 0) {
//             res.status(200).json({
//                 success: true,
//                 message: "GET Method Target",
//                 data: target
//             });
//         } else {
//             res.status(200).json({
//                 success: false,
//                 message: "Tidak ada data",
//                 data: []
//             });
//         }
//     } catch (error) {
//         res.status(404).json({
//             message: error.message
//         });
//     }
// }

controller.post = async function(req, res) {
    try {
        let target = await model.target.create({
            nis: req.body.nis,
            judul_target: req.body.judul_target,
            deskripsi_target: req.body.deskripsi_target
        })
        res.status(200).json({
            success: "true",
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
        await model.target.destroy({
            where: {
                nis: req.params.nis,
                id_target: req.params.id_target
            }
        })
        res.status(200).json({
            success: "true",
            message: "Berhasil Hapus Data Target"
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

module.exports = controller;