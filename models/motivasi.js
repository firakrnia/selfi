const Sequelize = require('sequelize');
const database = require("../config/database");
const admin = require("./admin");

const motivasi = database.define(
    "motivasi", {
        id_motivasi: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        judul_artikel: {
            type: Sequelize.STRING(100)
        },
        deskripsi_artikel: {
            type: Sequelize.TEXT
        },
        sampul_artikel: {
            type: Sequelize.STRING
        },
    }, {
        freezeTableName: true,
        timestamps: false
    }
);



motivasi.sync({});

module.exports = motivasi;