const Sequelize = require('sequelize');
const database = require("../config/database");
const kelas = require("./kelas");

const siswa = database.define(
    "siswa", {
        nis: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nama: {
            type: Sequelize.STRING(100)
        },
        id_kelas: {
            type: Sequelize.INTEGER(5)
        },
        jurusan: {
            type: Sequelize.STRING(20)
        },
        nohp: {
            type: Sequelize.STRING(15)
        },
        password: {
            type: Sequelize.STRING
        },

    }, {
        freezeTableName: true,
        timestamps: false
    }
);

kelas.hasMany(siswa, {
    foreignKey: 'id_kelas'
});

kelas.belongsTo(kelas, {
    foreignKey: "id_kelas"
});

siswa.sync({});

module.exports = siswa;