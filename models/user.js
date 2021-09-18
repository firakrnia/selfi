const Sequelize = require('sequelize');
const database = require("../config/database");

const siswa = database.define(
    "siswa", {
        nis: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nama: {
            type: Sequelize.STRING(100)
        },
        kelas: {
            type: Sequelize.STRING(5)
        },
        jurusan: {
            type: Sequelize.STRING(20)
        },
        nohp: {
            type: Sequelize.INTEGER(15)
        },
        password: {
            type: Sequelize.STRING
        },

    }, {
        freezeTableName: true,
        timestamps: false
    }
);

const todolist = database.define(
    "todolist", {
        id_kegiatan: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nis: {
            type: Sequelize.INTEGER
        },
        tanggal: {
            type: Sequelize.DATE
        },
        jam: {
            type: Sequelize.TIME
        },

    }, {
        freezeTableName: true,
        timestamps: false
    }

);

const target = database.define(
    "target", {
        id_target: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nis: {
            type: Sequelize.INTEGER
        },
        judul_target: {
            type: Sequelize.STRING(100)
        },
        deskripsi_target: {
            type: Sequelize.STRING(5)
        },
    }, {
        freezeTableName: true,
        timestamps: false
    }

);

const jadwal = database.define(
    "jadwal", {
        nis: {
            type: Sequelize.INTEGER
        },
        nama_kegiatan: {
            type: Sequelize.STRING(100)
        },
        waktu_kegiatan: {
            type: Sequelize.STRING(20)
        },

    }, {
        freezeTableName: true,
        timestamps: false
    }

);

siswa.hasMany(jadwal, {
    foreignKey: 'nis'
});
jadwal.hasMany(siswa, {
    foreignKey: 'nis'
});

siswa.hasMany(target, {
    foreignKey: 'nis'
});
target.hasMany(siswa, {
    foreignKey: 'nis'
});

siswa.hasMany(todolist, {
    foreignKey: 'nis'
});
todolist.hasMany(siswa, {
    foreignKey: 'nis'
});

jadwal.sync({});
target.sync({});
todolist.sync({});
siswa.sync({});

module.exports = siswa;