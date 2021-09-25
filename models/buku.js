const Sequelize = require('sequelize');
const database = require("../config/database");
const admin = require("./admin");

const buku = database.define(
    "buku", {
        id_buku: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_guru: {
            type: Sequelize.INTEGER(15)
        },
        judul_buku: {
            type: Sequelize.STRING(50)
        },
        deskripsi_buku: {
            type: Sequelize.STRING(50)
        },
        penulis_buku: {
            type: Sequelize.STRING(50)
        },
        kategori_buku: {
            type: Sequelize.STRING(50)
        },
        sampul_buku: {
            type: Sequelize.STRING
        },
        lampiran_buku: {
            type: Sequelize.BLOB
        }

    }, {
        freezeTableName: true,
        timestamps: false
    }

);

admin.hasMany(buku, {
    foreignKey: 'id_guru'
});

buku.sync({});

module.exports = buku;
