const Sequelize = require('sequelize');
const database = require(".../config/database");

const User = database.define (
    "user",
    {
        email
    }
)