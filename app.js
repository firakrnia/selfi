const express = require('express');
// const jwt = require("jsonwebtoken");
const passport = require("passport");
// const passportJWT = require("passport-jwt");
var port = process.env.PORT || 4500;

const route = require("./routes/index");
const app = express();

const db = require("./config/database");

db.authenticate().then(() => console.log("db berhasil terkoneksi"));

// const getAdmin = async obj => {
//     return await Admin.findOne({
//         where: obj
//     });
// };

app.use(express.urlencoded({
    extended: true
}));

app.use('/selfi', RouteSiswa);
app.use('/selfi', routeKonsul);
app.use('/selfi', routeTodolist);
app.use("/selfi/target", routeTarget);

app.use(express.json()); 

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

app.use('/selfi', route.siswa);

app.use('/selfi', route.auth);

app.use('/selfi', route.konseling);

app.use('/selfi', route.todolist);

app.use("/selfi", route.target);



app.get('/selfi', (req, res) => res.send("Selamat datang di Selfi"));

app.post('/selfi/login/admin', async (req, res) => {
    try {
        const {
            username,
            password
        } = req.body;

        if (username && password) {
            let admin = await getAdmin({
                username: username
            });

            if (!admin) {
                res.status(401).json({
                    message: "username salah atau anda belum terdaftar"
                });
            }

            if (admin.password === password) {
                let payload = {
                    id: admin.id
                };

                let token = jwt.sign(payload, jwtOptions.secretOrKey);

                res.json({
                    msg: "oke berhasil login",
                    token: token
                });
            } else {
                res.status(401).json({
                    message: "password salah"
                });
            }
        }
    } catch (err) {
        console.error(err.message);
        resizeTores.status(500).send("server error");
    }
});

//url ke menu profil
app.get('/selfi/profil', passport.authenticate("jwt", {
    session: false
}), (req, res) => {
    try {
        res.send("Selamat anda bisa mengakses route ini dengan passportjs");
    } catch (err) {
        console.error(err.message);
        resizeTores.status(500).send("server error");
    }

});

// url menu utama
app.get('/selfi/utama', passport.authenticate("jwt", {
    session: false
}), (req, res) => {
    try {
        res.send("Selamat datang di menu utama SELFI");
    } catch (err) {
        console.error(err.message);
        resizeTores.status(500).send("server error");
    }

});



app.post('/selfi/register/admin', async (req, res) => {
    try {
        const {
            hp_guru,
            nama_guru,
            username,
            password
        } = req.body;
        const newAdmin = new Admin({
            hp_guru,
            nama_guru,
            username,
            password
        })
        await newAdmin.save();
        res.json(newAdmin);
    } catch (err) {
        console.error(err.message);
        resizeTores.status(500).send("server error");
    }
});

// buat post buku di menu admin
app.post('/selfi/buku/tambah', passport.authenticate("jwt", {
    session: false
}), async (req, res) => {
    try {
        const {
            id_buku,
            id_guru,
            judul_buku,
            deskripsi_buku,
            penulis_buku,
            kategori_buku,
            sampul_buku,
            lampiran_buku
        } = req.body;
        const newBuku = new Admin.buku({
            id_buku,
            id_guru,
            judul_buku,
            deskripsi_buku,
            penulis_buku,
            kategori_buku,
            sampul_buku,
            lampiran_buku
        })
        await newAdmin.save();
        res.json(newBuku);
    } catch (err) {
        console.error(err.message);
        resizeTores.status(500).send("server error");
    }
});

// app.post('/selfi/belajar', passport.authenticate("jwt", {
//     session: false
// }), async (req, res) => {
//     try {
//         const {
//             id_buku,
//             nis
//         } = req.body;
//         const newBuku = new Admin.buku({
//             id_buku,
//             nis
//         })
//         await newAdmin.save();
//         res.json(newBuku);
//     } catch (err) {
//         console.error(err.message);
//         resizeTores.status(500).send("server error");
//     }
// });

app.post('/selfi/motivasi/tambah', async (req, res) => {
    try {
        const {
            id_guru,
            judul_artikel,
            deskripsi_artikel,
            kategori_artikel
        } = req.body;
        const newMotivasi = new Admin.motivasi({
            id_guru,
            judul_artikel,
            deskripsi_artikel,
            kategori_artikel
        })
        await newMotivasi.save();
        res.json(newMotivasi);
    } catch (err) {
        console.error(err.message);
        resizeTores.status(500).send("server error");
    }
});
app.post('/selfi/target', async (req, res) => {
    try {
        const {
            id_target,
            nis,
            judul_target,
            deskripsi_target
        } = req.body;
        const newTarget = new User.target({
            id_target,
            nis,
            judul_target,
            deskripsi_target
        })
        await newTarget.save();
        res.json(newTarget);
    } catch (err) {
        console.error(err.message);
        resizeTores.status(500).send("server error");
    }
});

//blom tau gimana table nya
// app.post('/selfi/jadwal', async (req, res) => {
//     try {
//         const {
//             id_target,
//             nis,
//             judul_target,
//             deskripsi_target
//         } = req.body;
//         const newTarget = new User.target({
//             id_target,
//             nis,
//             judul_target,
//             deskripsi_target
//         })
//         await newTarget.save();
//         res.json(newTarget);
//     } catch (err) {
//         console.error(err.message);
//         resizeTores.status(500).send("server error");
//     }
// });

// app.post('/selfi/todolist', async (req, res) => {
//     try {
//         const {
//             id_kegiatan,
//             nis,
//             tanggal,
//             jam
//         } = req.body;
//         const newTodolist = new User.Todolist({
//             id_kegiatan,
//             nis,
//             tanggal,
//             jam
//         })
//         await newTodolist.save();
//         res.json(newTodolist);
//     } catch (err) {
//         console.error(err.message);
//         resizeTores.status(500).send("server error");
//     }
// });

app.post('/selfi/konseling', async (req, res) => {
    try {
        const {
            id_konseling,
            nama_guru,
            hp_guru,
            jenis_konseling
        } = req.body;
        const newKonseling = new Konseling({
            id_konseling,
            nama_guru,
            hp_guru,
            jenis_konseling
        })
        await newKonseling.save();
        res.json(newKonseling);
    } catch (err) {
        console.error(err.message);
        resizeTores.status(500).send("server error");
    }
});

app.listen(port);