const sequelize = require("sequelize");

const db = new sequelize("kksi_selfi", "root", "", {
  dialect: "mysql"
});

db.sync({});

module.exports = db;