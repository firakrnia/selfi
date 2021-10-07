const express = require('express');
const router = express.Router();
const controller = require("../controllers/index");

router.get('/todolist/:nis', controller.todolist.getAllTodolist);

router.get('/todolist/:nis/jumlah', controller.todolist.getUnCompletedTodolist);

router.post('/todolist/tambah', controller.todolist.post);

router.put('/todolist/:nis/:id_kegiatan', controller.todolist.put);

router.delete('/todolist/:nis/:id_kegiatan', controller.todolist.delete);

router.get('/todolist/:nis/selesai', controller.todolist.getCompletedTodolist);

module.exports = router;