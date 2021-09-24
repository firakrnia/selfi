const siswa = require("./siswa");
const auth = require("./login");
const controller = {};

controller.siswa = siswa;
controller.auth = auth;

module.exports = controller;