const Sequelize = require('sequelize');
const database = require("../config/database");

const admin = database.define(
    "tb_user", {
        id_guru: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        foto: {
            type: Sequelize.STRING
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

