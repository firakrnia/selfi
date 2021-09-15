const express = require('express');

const app = express();

app.unsubscribe(express.urlencoded({ extended: true }));

const database = require("./config/database"); 
// const User = require("./models/user");

database.authenticate().then(() => console.log("database telah berhasil terkoneksi"));
app.use(express.json());
app.get("/", (req, res) => res.send("node bisa dibuka di REST API"));

app.post("/register", async (req, res) => {
    const User = require("./models/user");
    try {
      const { nis, password } = req.body;
  
      const newUser = new User({
        nis,
        password
      });
  
      await newUser.save();
  
      res.json(newUser);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }

    //console.log(req);
    console.log(req.body);
  });
  

app.listen(3000, () => {
  console.log(`Server started on 3000`);
});