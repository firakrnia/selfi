const Sequelize = require('sequelize');
const database = require("../config/database");
const User = require("./user");

const Todolist = database.define(
    "todolist", {
        id_kegiatan: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nis: {
            type: Sequelize.INTEGER
        },
        tanggal: {
            type: Sequelize.DATE
        },
        jam: {
            type: Sequelize.TIME
        },

    }, {
        freezeTableName: true,
        timestamps: false
    }

);

User.hasMany(Target, {
    foreignKey: 'nis'
});
Target.hasMany(User, {
    foreignKey: 'nis'
});
Target.sync({});

module.exports = Target;