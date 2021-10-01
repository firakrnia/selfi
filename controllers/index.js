const siswa = require("./siswa");
const auth = require("./login");
const konseling = require("./konseling");
const todolist = require("./todolist");
const target = require("./target");
const jadwal = require("./jadwal");
const controller = {};

controller.siswa = siswa;
controller.auth = auth;
controller.konseling = konseling;
controller.todolist= todolist;
controller.target = target;
controller.jadwal = jadwal;


module.exports = controller;