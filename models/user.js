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

// const jadwal = database.define(
//     "jadwal", {
//         nis: {
//             type: Sequelize.INTEGER
//         },
//         nama_kegiatan: {
//             type: Sequelize.STRING(100)
//         },
//         waktu_kegiatan: {
//             type: Sequelize.STRING(20)
//         },

//     }, {
//         freezeTableName: true,
//         timestamps: false
//     }

// );

// // siswa.hasMany(jadwal, {
// //     foreignKey: 'nis'
// // });
// // jadwal.hasMany(siswa, {
// //     foreignKey: 'nis'
// // });

siswa.sync({});

module.exports = siswa;