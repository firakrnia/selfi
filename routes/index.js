const siswa = require("./siswa");
const auth = require("./authroutes");
const target = require("./target");
const todolist = require("./todolist");
const konseling = require("./konseling");
const route = {};

route.siswa = siswa;
route.auth = auth;
route.target = target;
route.todolist = todolist;
route.konseling = konseling;

module.exports = route;

