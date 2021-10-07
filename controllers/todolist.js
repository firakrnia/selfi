const model = require("../models/index");
const sequelize = require('sequelize');
const controller = {};
const { Op } = require("sequelize");

controller.getAllTodolist = async function (req, res) {
    try {
        let todolist = await model.todolist.findAll({
            where: {
                nis: req.params.nis
            }
        })
        if (todolist.length > 0) {
            res.status(200).json({
                success: "true",
                message: "GET Method todolist",
                data: todolist
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

// controller.getTodolistLength = async function (req, res) {
//     try {
//         let todolist = await model.todolist.findAll({
//             where: {
//                 nis: req.params.nis
//             }
//         })
//         if (todolist.length > 0) {
//             res.status(200).json({
//                 success: "true",
//                 message: "GET Method todolist",
//                 data: todolist.length
//             });
//         } else {
//             res.status(200).json({
//                 success: "false",
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

controller.getUnCompletedTodolist = async function (req, res) {
    try {
        let todolist = await model.todolist.findAll({
            attributes: [
                [sequelize.fn('COUNT', sequelize.col('status')), 'totalKegiatanTertunda'],
            ],
            where: {
                nis: req.params.nis,
                status: "on_progress"
            }
        })
        if (todolist.length > 0) {
            res.status(200).json({
                success: "true",
                message: "GET Method todolist",
                data: todolist
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

controller.post = async function (req, res) {
    try {
        let todolist = await model.todolist.create({
            nama_kegiatan: req.body.nama_kegiatan,
            nis: req.body.nis,
            tanggal: req.body.tanggal,
            jam: req.body.jam,
            // status: "on_progress"
        })
        res.status(200).json({
            success: true,
            message: "Berhasil menambahkan todolist",
            data: todolist
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

controller.put = async function (req, res) {
    try {
        let todolist = await model.todolist.update({
            status: req.body.status,
        }, {
            where: {
                nis: req.params.nis,
                id_kegiatan: req.params.id_kegiatan
            }
        })
        res.status(200).json({
            success: true,
            message: "Berhasil Update Status",
            data: todolist
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

controller.getCompletedTodolist = async function (req, res) {
    try {
        let todolist = await model.todolist.findAll({
            attributes: [
                [sequelize.fn('COUNT', sequelize.col('status', 'destroyTime')), 'totalKegiatanSelesai'],
              ],
            where: {
                nis: req.params.nis,
                [Op.or]: [
                    { status: "completed" },
                    { destroyTime: null }
                  ]
            }
        })
        res.status(200).json({
            success: "true",
            message: "GET Method todolist",
            data: todolist
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

controller.delete = async function (req, res) {
    try {
        let todolist = await model.todolist.destroy({
            where: {
                nis: req.params.nis,
                id_kegiatan: req.params.id_kegiatan
            }
        });

        res.status(200).json({
            success: true,
            message: "Berhasil Hapus Data Todolist"
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

module.exports = controller;