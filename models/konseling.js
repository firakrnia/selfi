const Sequelize = require('sequelize');
const database = require("../config/database");

const konseling = database.define(
    "konseling", {
        id_konseling: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama: {
            type: Sequelize.STRING
        },
        keahlian: {
            type: Sequelize.STRING
        },
        nohp: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }

);


konseling.sync({});

module.exports = konseling;