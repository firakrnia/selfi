const Sequelize = require('sequelize');
const database = require("../config/database");
const buku = require("./buku");
const siswa =  require("./user");

const perpustakaan = database.define(
    "perpustakaan", {
        id_buku: {
            type: Sequelize.INTEGER(15),
            primaryKey: true
        },
        nis: {
            type: Sequelize.STRING(50)
        }

    }, {
        timestamps: false
    }
);

siswa.hasMany(perpustakaan, { foreignKey: 'nis' });
perpustakaan.hasMany(siswa, { foreignKey: 'nis' });

buku.hasMany(perpustakaan, { foreignKey: 'id_buku' });
perpustakaan.hasMany(buku, { foreignKey: 'id_buku' });

perpustakaan.sync({});

module.exports = perpustakaan;