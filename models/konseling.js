const Sequelize = require('sequelize');
const database = require("../config/database");
const admin = require("./admin");

const konseling = database.define(
    "konseling", {
        id_konseling: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_guru: {
            type: Sequelize.INTEGER(15)
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }

);

admin.hasMany(konseling, {
    foreignKey: 'id_guru'
});

konseling.sync({});

module.exports = konseling;