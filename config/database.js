const sequelize = require("sequelize");

const db = new sequelize("kksi_selfi", "root", "", {
  dialect: "mysql",
  dialectOptions: {
    useUTC: false, //for reading from database
    dateStrings: true,
    typeCast: true
},
  "timezone": '+07:00'
});

// const db = new sequelize("asdasdas_selfi", "asdasdas_selfi", "Project_selfi", {
//   dialect: "mysql"
// });

db.sync({});

module.exports = db;