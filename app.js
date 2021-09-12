const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("node bisa dibuka di REST API"));

app.listen(3000, () => console.log("port berjalan di 4500"));