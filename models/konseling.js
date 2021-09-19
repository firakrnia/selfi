const Sequelize = require('sequelize');
const database = require("../config/database");
const admin = require("./admin");

const konseling = database.define(
    "konseling", {
        id_konseling: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        id_guru: {
            type: Sequelize.INTEGER(15)
        },
        hp_guru: {
            type: Sequelize.INTEGER(15)
        },
        jenis_konseling: {
            type: Sequelize.STRING(25)
        }
    }, {
        freezeTableName: true
    }

);

admin.hasMany(konseling, {
    foreignKey: 'id_guru'
});
konseling.hasMany(admin, {
    foreignKey: 'id_guru'
});
konseling.sync({});

module.exports = konseling;