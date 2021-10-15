const Sequelize = require('sequelize');
const database = require("../config/database");

const buku = database.define(
    "buku", {
        id_buku: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        judul: {
            type: Sequelize.STRING
        },
        penulis: {
            type: Sequelize.STRING
        },
        penerbit: {
            type: Sequelize.STRING
        },
        kategori: {
            type: Sequelize.STRING
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
