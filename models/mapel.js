const Sequelize = require('sequelize');
const database = require("../config/database");

const mapel = database.define(
    "mapel", {
        id_mapel: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nama_mapel: {
            type: Sequelize.STRING(50)
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }

);

// siswa.hasMany(target, {
//     foreignKey: 'nis'
// });
// target.hasMany(siswa, {
//     foreignKey: 'nis'
// });

mapel.sync({});

module.exports = mapel;