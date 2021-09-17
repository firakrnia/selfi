const Sequelize = require('sequelize');
const database = require("../config/database");

const Admin = database.define (
    "admin",
    {
        hp_guru : { type: Sequelize.INTEGER(15), primaryKey: true},
        nama_guru : {type: Sequelize.STRING(50)},
        keahlian : {type: Sequelize.STRING(25)}

    },
    {   freezeTableName : true,
        timestamps: false
    }
);

Admin.sync({});

module.exports = Admin;