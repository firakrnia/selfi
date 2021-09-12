const express = require("express");
const app = express();

app.unsubscribe(express.urlencoded({extended: true}));

const database = require("./config/database");

database.authenticate(). then(()=> console.log("database telah berhasil terkoneksi"));

app.get("/", (req, res) => res.send("node bisa dibuka di REST API"));

app.listen(3000, () => console.log("port berjalan di 4500"));