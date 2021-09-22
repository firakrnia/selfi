const Sequelize = require('sequelize');
const database = require("../config/database");

const admin = database.define(
    "admin", {
        id_guru: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement : true
        },
        hp_guru: {
            type: Sequelize.STRING(15)
        },
        nama_guru: {
            type: Sequelize.STRING(50)
        },
        username: {
            type: Sequelize.STRING(25)
        },
        password: {
            type: Sequelize.STRING(25)
        }

    }, {
        freezeTableName: true,
        timestamps: false
    }
);

admin.sync({});

module.exports = admin;

