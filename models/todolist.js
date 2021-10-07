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
            type: Sequelize.INTEGER,
        },
        tanggal: {
            type: Sequelize.DATEONLY
        },
        jam: {
            type: Sequelize.TIME
        },
        status: {
            type: Sequelize.ENUM('completed', 'on_progress'),
            defaultValue: "on_progress"
        }

    }, {
        freezeTableName: true,
        paranoid: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'destroyTime'
    }
);

siswa.hasMany(todolist, {
    foreignKey: 'nis'
});

todolist.sync({});

module.exports = todolist;