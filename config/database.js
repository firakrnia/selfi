const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "selfi"
});

Connection.connect(function(error){
    if (error) throw error
    else console.log ("koneksi berhasil")
})
// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

// module.exports= db;

// const sequelize = require("sequelize");

// const db = new sequelize("selfi", "root", "", {
//   dialect: "mysql"
// });

// db.sync({});

// module.exports = db;