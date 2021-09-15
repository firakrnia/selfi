const Sequelize = require('sequelize');
const database = require("../config/database");

const User = database.define (
    "siswa",
    {
        NIS : { type: Sequelize.INTEGER},
        password: { type: Sequelize.STRING},
    }
);

User.sync({});

module.exports = User;