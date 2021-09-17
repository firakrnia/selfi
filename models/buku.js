const Sequelize = require('sequelize');
const database = require("../config/database");
const Admin = require("./admin");

const Buku = database.define(
    "buku",
    {
        id_buku: { type: Sequelize.INTEGER, primaryKey: true },
        hp_guru: { type: Sequelize.INTEGER(15) },
        judul_buku: { type: Sequelize.STRING(50) },
        deskripsi_buku: { type: Sequelize.STRING(50) },
        penulis_buku: { type: Sequelize.STRING(50) },
        kategori_buku: { type: Sequelize.STRING(50) },
        sampul_buku: { type: Sequelize.STRING },
        lampiran_buku: { type: Sequelize.BLOB }

    },
    { freezeTableName: true }

);

Admin.hasMany(Buku, { foreignKey: 'hp_guru' });
Buku.hasMany(Admin, { foreignKey: 'hp_guru' });
Buku.sync({});

module.exports = Buku;
