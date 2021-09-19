const Sequelize = require('sequelize');
const database = require("../config/database");
const buku = require("./buku");
const siswa =  require("./user");

const perpustakaan = database.define(
    "perpustakaan", {
        id_buku: {
            type: Sequelize.INTEGER(15)
        },
        nis: {
            type: Sequelize.INTEGER
        }

    }, {
        freezeTableName: true,
        timestamps: false
    }
);

siswa.hasMany(perpustakaan, { foreignKey: 'nis' });

buku.hasMany(perpustakaan, { foreignKey: 'id_buku' });

perpustakaan.sync({});

module.exports = perpustakaan;