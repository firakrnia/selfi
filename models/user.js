const Sequelize = require('sequelize');
const database = require("../config/database");

const User = database.define (
    "siswa",
    {
        nis : { type: Sequelize.INTEGER, primaryKey: true},
        nama : {type: Sequelize.STRING(100)},
        kelas : {type: Sequelize.STRING(5)},
        jurusan : {type: Sequelize.STRING(20)},
        nohp : {type: Sequelize.INTEGER(15)},
        password: { type: Sequelize.STRING},

    },
    {freezeTableName : true}
);

User.sync({});

module.exports = User;