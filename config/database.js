const sequelize = require("sequelize");

const db = new sequelize("selfi", "root", "", {
  dialect: "mysql"
});

db.sync({});

module.exports = db;