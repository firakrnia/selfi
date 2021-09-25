const Sequelize = require('sequelize');
const database = require("../config/database");
const siswa = require("./user");

const todolist = database.define(
    "todolist", {
        id_kegiatan: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_kegiatan: {
            type: Sequelize.STRING,
        },
        nis: {
            type: Sequelize.INTEGER
        },
        tanggal: {
            type: Sequelize.DATE
        },
        jam: {
            type: Sequelize.TIME
        },

    }, {
        freezeTableName: true,
        timestamps: false
    }
);

siswa.hasMany(todolist, {
    foreignKey: 'nis'
});

todolist.sync({});

module.exports = todolist;