const Sequelize = require('sequelize');
const database = require("../config/database");
const kelas = require("./kelas");
const mapel = require("./mapel");

const jadwal = database.define(
    "jadwal", {
        id_kelas: {
            type: Sequelize.INTEGER
        },
        hari: {
            type: Sequelize.STRING(100)
        },
        id_mapel: {
            type: Sequelize.INTEGER(100)
        },
        waktu_dimulai: {
            type: Sequelize.TIME
        },
        waktu_selesai: {
            type: Sequelize.TIME
        },

    }, {
        freezeTableName: true,
        timestamps: false
    }
);

kelas.hasMany(jadwal, {
    foreignKey: 'id_kelas'
});


// jadwal.hasMany(mapel, {
//     foreignKey: 'id_mapel'
// });
// mapel.belongsTo(jadwal, {
//     foreignKey: 'id_mapel'
// });
mapel.hasMany(jadwal, {
    foreignKey: 'id_mapel'
});
jadwal.belongsTo(mapel, {
    foreignKey: 'id_mapel'
});

jadwal.sync({});

module.exports = jadwal;
