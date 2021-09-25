const model = require("../models/index");
const controller = {};

controller.getAllTodolist = async function (req, res) {
    try {
        let todolist = await model.todolist.findAll()
            if (todolist.length > 0) {
                res.status(200).json({
                    message: "GET Method todolist",
                    data: todolist
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
        let todolist = await model.todolist.create({
            
        })
    } catch (error) {
    }
}

controller.delete = async function(req, res) {
    try {
        let todolist = await model.todolist.destroy({
            where : {
                id_kegiatan: req.params.id_kegiatan
            }
        })
        res.status(200).json({
            message: "Berhasil Hapus Data Todolist"
        })
    } catch(error) {
        res.status(404).json({
            message: error.message
        });
    } 
}

module.exports = controller;