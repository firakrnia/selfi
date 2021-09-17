const Sequelize = require('sequelize');
const database = require("../config/database");
const User = require("./user");

const Target = database.define (
    "target",
    {
        id_target : { type: Sequelize.INTEGER, primaryKey: true},
        nis : {type: Sequelize.INTEGER},
        judul_target : {type: Sequelize.STRING(100)},
        deskripsi_target : {type: Sequelize.STRING(5)},
    },
    {freezeTableName : true}
    
);

User.hasMany(Target, {foreignKey: 'nis'});
Target.hasMany(User, {foreignKey: 'nis'});
Target.sync({});

module.exports = Target;
