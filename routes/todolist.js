const express = require('express');
const router = express.Router();
const controller = require("../controllers/index");

router.get('/todolist', controller.todolist.getAllTodolist);
router.delete('/todolist', controller.todolist.delete);

module.exports = router;