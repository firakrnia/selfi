const Sequelize = require('sequelize');
const database = require("../config/database");
const admin = require("./admin");

const motivasi = database.define(
    "motivasi", {
        id_motivasi: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        id_guru: {
            type: Sequelize.INTEGER(15)
        },
        judul_artikel: {
            type: Sequelize.STRING(100)
        },
        deskripsi_artikel: {
            type: Sequelize.STRING
        },
        kategori_artikel: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true
    }

);

admin.hasMany(motivasi, {
    foreignKey: 'id_guru'
});
motivasi.hasMany(admin, {
    foreignKey: 'id_guru'
});

motivasi.sync({});

module.exports = motivasi;