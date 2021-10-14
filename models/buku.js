const Sequelize = require('sequelize');
const database = require("../config/database");
// const admin = require("./admin");

const buku = database.define(
    "buku", {
        id_buku: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        judul: {
            type: Sequelize.STRING(50)
        },
        deskripsi: {
            type: Sequelize.TEXT
        },
        penulis: {
            type: Sequelize.STRING(50)
        },
        kategori: {
            type: Sequelize.STRING(50)
        },
        sampul: {
            type: Sequelize.STRING
        },
        lampiran: {
            type: Sequelize.STRING
        }

    }, {
        freezeTableName: true,
        timestamps: false
    }

);

buku.sync({});

module.exports = buku;
