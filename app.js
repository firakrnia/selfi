const express = require('express');
var port = process.env.PORT || 4500;

const route = require("./routes/index");
const db = require("./config/database");
const app = express();
// const middleware = require("./middleware/auth");


db.authenticate().then(() => console.log("db berhasil terkoneksi"));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json()); 

app.use('/selfi', route.auth);

app.use('/selfi', route.siswa);

app.use('/selfi', route.konseling);

app.use('/selfi', route.todolist);

app.use("/selfi", route.target);

app.use('/selfi', route.motivasi);

app.use("/selfi", route.jadwal);

app.use("/selfi", route.buku);

app.use("/selfi", route.pushNotification);

// app.use('/selfi', middleware, route.siswa);

// app.use('/selfi', middleware, route.konseling);

// app.use('/selfi', middleware, route.todolist);

// app.use("/selfi", middleware, route.target);

// app.use('/selfi', middleware, route.motivasi);

// app.use("/selfi", middleware, route.jadwal);

// app.use("/selfi", middleware, route.buku);

//handling error endpoint
app.use((req, res, next)=>{
    const error = new Error("Codingan Salah");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status||500);
    res.json({
        msg: error.message
    });
})

app.listen(port);