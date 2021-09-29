const express = require('express');
const router = express.Router();
const controller = require("../controllers/index");

router.get('/todolist', controller.todolist.getAllTodolist);

router.get('/todolist/jumlah', controller.todolist.getTodolistLength);

router.post('/todolist/tambah', controller.todolist.post);

router.delete('/todolist/:id_kegiatan', controller.todolist.delete);

module.exports = router;