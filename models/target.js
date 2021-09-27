const Sequelize = require('sequelize');
const database = require("../config/database");
const siswa = require("./user");

const target = database.define(
    "target", {
        id_target: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nis: {
            type: Sequelize.INTEGER
        },
        judul_target: {
            type: Sequelize.STRING(100)
        },
        deskripsi_target: {
            type: Sequelize.STRING(500)
        },
    }, {
        freezeTableName: true,
        timestamps: false
    }

);

siswa.hasMany(target, {
    foreignKey: 'nis'
});

target.sync({});

module.exports = target;