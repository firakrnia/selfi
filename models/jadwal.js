const Sequelize = require('sequelize');
const database = require("../config/database");
const User = require("./user");

const Jadwal = database.define (
    "jadwal",
    {
        id_kegiatan : { type: Sequelize.INTEGER, primaryKey: true},
        nis : {type: Sequelize.INTEGER},
        nama_kegiatan : {type: Sequelize.STRING(100)},
        waktu_kegiatan : {type: Sequelize.STRING(20)},

    },
    {freezeTableName : true}
    
);

User.hasMany(Target, {foreignKey: 'nis'});
Target.hasMany(User, {foreignKey: 'nis'});
Target.sync({});

module.exports = Target;
