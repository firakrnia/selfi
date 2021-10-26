const model = require("../models/index");
const sequelize = require('sequelize');
const controller = {};
const { Op } = require("sequelize");
var cron = require('node-cron');

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
        let dt = new Date();
        // const localTime = dt.getTime();
        // const localOffset = dt.getTimezoneOffset() * 60 * 1000;
        // const utcTime = localTime + localOffset;

        // const estOffset = getEstOffset()
        // const ind = utcTime + (60 * 60 * 1000 * estOffset);
        // const nd = new Date(ind);

        
        // let LocaleTimeOffset = dt.getTimezoneOffset();
        // let date = dt.getDate();
        // let month = dt.getMonth()
        // let day = dt.getDay();
        // let hours = dt.getHours();
        // let minutes = dt.getMinutes();

console.log(dt.  toString());

        // cron.schedule(`* ${minutes} ${hours} ${date} ${month} ${day}`, () => {
        //     console.log('cron-job jalan');
        //   });

        // dt.setHours(req.body.jam-LocaleTimeOffset);
        // dt.setMinutes(req.body.jam-LocaleTimeOffset);
        // dt.setSeconds(0);
        // dt.setMilliseconds(0);

        let todolist = await model.todolist.create({
            nama_kegiatan: req.body.nama_kegiatan,
            nis: req.body.nis,
            tanggal: new Date()
            // jam: req.body.jam,
            // status: "on_progress"
        }
        );
        
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
                [sequelize.fn('COUNT', sequelize.col('status')), 'totalKegiatanSelesai'],
              ],
            where: {
                nis: req.params.nis,
                [Op.or]: [
                    { status: "completed" }
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