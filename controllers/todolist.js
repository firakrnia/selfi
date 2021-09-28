const model = require("../models/index");
const controller = {};

controller.getAllTodolist = async function (req, res) {
    try {
        let todolist = await model.todolist.findAll()
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

controller.post = async function(req, res) {
    try {
        let todolist = await model.todolist.create({
            nama_kegiatan: req.body.nama_kegiatan,
            nis: req.body.nis,
            tanggal: req.body.tanggal,
            jam: req.body.jam
        })
        res.status(200).json({
            success: "true",
            message: "Berhasil menambahkan todolist",
            data: todolist
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

controller.delete = async function(req, res) {
    try {
        await model.todolist.destroy({
            where : {
                id_kegiatan: req.params.id_kegiatan
            }
        })
        res.status(200).json({
            success: "true",
            message: "Berhasil Hapus Data Todolist"
        })
    } catch(error) {
        res.status(404).json({
            message: error.message
        });
    } 
}

module.exports = controller;