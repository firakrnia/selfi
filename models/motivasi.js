const Sequelize = require('sequelize');
const database = require("../config/database");

const motivasi = database.define(
    "motivasi", {
        id_motivasi: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        judul: {
            type: Sequelize.STRING(100)
        },
        deskripsi: {
            type: Sequelize.TEXT
        },
        sampul: {
            type: Sequelize.STRING
        },
    }, {
        freezeTableName: true,
        timestamps: false
    }
);



motivasi.sync({});

module.exports = motivasi;