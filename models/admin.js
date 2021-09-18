const Sequelize = require('sequelize');
const database = require("../config/database");

const admin = database.define(
    "admin", {
        hp_guru: {
            type: Sequelize.INTEGER(15),
            primaryKey: true
        },
        nama_guru: {
            type: Sequelize.STRING(50)
        },
        keahlian: {
            type: Sequelize.STRING(25)
        }

    }, {
        freezeTableName: true,
        timestamps: false
    }
);

const motivasi = database.define(
    "motivasi", {
        hp_guru: {
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

const buku = database.define(
    "buku", {
        id_buku: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        hp_guru: {
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
        freezeTableName: true
    }

);

admin.hasMany(buku, {
    foreignKey: 'hp_guru'
});
buku.hasMany(admin, {
    foreignKey: 'hp_guru'
});

admin.hasMany(motivasi, {
    foreignKey: 'hp_guru'
});
motivasi.hasMany(admin, {
    foreignKey: 'hp_guru'
});

buku.sync({});
motivasi.sync({});
admin.sync({});

module.exports = admin;