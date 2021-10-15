const siswa = require("./siswa");
const auth = require("./login");
const konseling = require("./konseling");
const todolist = require("./todolist");
const target = require("./target");
const jadwal = require("./jadwal");
const motivasi = require("./motivasi");
const buku = require("./buku");
const pushNotification = require("./pushNotification");
const controller = {};

controller.siswa = siswa;
controller.auth = auth;
controller.konseling = konseling;
controller.todolist= todolist;
controller.target = target;
controller.jadwal = jadwal;
controller.motivasi = motivasi;
controller.buku = buku;
controller.pushNotification = pushNotification;

module.exports = controller;