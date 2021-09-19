const Sequelize = require('sequelize');
const database = require("../config/database");

const hari = database.define(
    "hari", {
        id_hari: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nama_hari: {
            type: Sequelize.STRING(10)
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }

);

hari.sync({});

module.exports = hari;