const siswa = require("./siswa");
const auth = require("./authroutes");
const target = require("./target");
const todolist = require("./todolist");
const konseling = require("./konseling");
const jadwal = require("./jadwal");
const motivasi = require("./motivasi");
const buku = require("./buku");
const pushNotification = require("./pushNotification");
const route = {};

route.siswa = siswa;
route.auth = auth;
route.target = target;
route.todolist = todolist;
route.konseling = konseling;
route.jadwal = jadwal;
route.motivasi = motivasi;
route.buku = buku;
route.pushNotification = pushNotification;

module.exports = route;

