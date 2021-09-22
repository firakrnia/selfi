const Sequelize = require('sequelize');
const database = require("../config/database");

const mapel = database.define(
    "mapel", {
        id_mapel: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_mapel: {
            type: Sequelize.STRING(50)
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }

);

mapel.sync({});

module.exports = mapel;