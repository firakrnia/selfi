const Sequelize = require('sequelize');
const database = require("../config/database");

const kelas = database.define(
    "kelas", {
        id_kelas: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama: {
            type: Sequelize.STRING(10)
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }

);

kelas.sync({});

module.exports = kelas;