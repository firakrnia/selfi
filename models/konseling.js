const Sequelize = require('sequelize');
const database = require("../config/database");
const admin = require("./admin");

const konseling = database.define (
    "konseling",
    {
        id_konseling : { type: Sequelize.INTEGER, primaryKey: true},
        nama_guru : {type: Sequelize.STRING(30)},
        hp_guru : {type: Sequelize.INTEGER(15)},
        jenis_konseling : {type: Sequelize.STRING(25)}
    },
    {freezeTableName : true} 
    
);

admin.hasMany(konseling, {foreignKey: 'hp_guru'});
konseling.hasMany(admin, {foreignKey: 'hp_guru'});
konseling.sync({});

module.exports = konseling;
