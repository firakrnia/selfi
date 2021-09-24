const sequelize = require("sequelize");

const db = new sequelize("kksi_selfi", "root", "", {
  dialect: "mysql"
});

// const db = new sequelize("asdasdas_selfi", "asdasdas_selfi", "Project_selfi", {
//   dialect: "mysql"
// });

db.sync({});

module.exports = db;