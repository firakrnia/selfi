const siswa = require("./siswa");
const auth = require("./authroutes");
const target = require("./target");
const todolist = require("./todolist");
const konseling = require("./konseling");
const jadwal = require("./jadwal");
const route = {};

route.siswa = siswa;
route.auth = auth;
route.target = target;
route.todolist = todolist;
route.konseling = konseling;
route.jadwal = jadwal;

module.exports = route;

