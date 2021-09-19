const express = require('express');
const jwt = require("jsonwebtoken");
const passport = require("passport");
const passportJWT = require("passport-jwt");

// const User = require("./models/user");
// const Admin = require("./models/admin");
// const todolist = require("./models/todolist");
// const target = require("./models/target");
//const Konseling = require("./models/konseling");
// const Perpustakaan = require("./models/perpustakaan");
const modul = require("./models/index");

const app = express();

const db = require("./config/database");

db.authenticate().then(() => console.log("db berhasil terkoneksi"));

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "kksi_selfi";

let strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
    let user = getUser({
        id: jwt_payload.id
    });

    if (user) {
        next(null, user);
    } else {
        next(null, false);
    }
});

passport.use(strategy);

const getUser = async obj => {
    return await User.findOne({
        where: obj
    });
};

const getAdmin = async obj => {
    return await Admin.findOne({
        where: obj
    });
};

//ini midddleware
app.use(express.urlencoded({
    extended: true
}));

app.get('/selfi', (req, res) => res.send("Selamat datang di Selfi"));

app.post('/selfi/login/siswa', async (req, res) => {
    try {
        const {
            nis,
            password
        } = req.body;

        if (nis && password) {
            let user = await getUser({
                nis: nis
            });

            if (!user) {
                res.status(401).json({
                    message: "nis salah atau anda belum terdaftar"
                });
            }

            if (user.password === password) {
                let payload = {
                    id: user.id
                };

                let token = jwt.sign(payload, jwtOptions.secretOrKey);

                res.json({
                    msg: "oke",
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

// app.post('/selfi/login/admin', async (req, res) => {
//     try {
//         const {
//             username,
//             password
//         } = req.body;

//         if (username && password) {
//             let admin = await getAdmin({
//                 username: username
//             });

//             if (!admin) {
//                 res.status(401).json({
//                     message: "username salah atau anda belum terdaftar"
//                 });
//             }

//             if (admin.password === password) {
//                 let payload = {
//                     id: admin.id
//                 };

//                 let token = jwt.sign(payload, jwtOptions.secretOrKey);

//                 res.json({
//                     msg: "oke berhasil login",
//                     token: token
//                 });
//             } else {
//                 res.status(401).json({
//                     message: "password salah"
//                 });
//             }
//         }
//     } catch (err) {
//         console.error(err.message);
//         resizeTores.status(500).send("server error");
//     }
// });

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

// app.post('/selfi/register/siswa', async (req, res) => {
//     try {
//         const {
//             nis,
//             nama,
//             kelas,
//             jurusan,
//             nohp,
//             password
//         } = req.body;
//         const newUser = new User({
//             nis,
//             nama,
//             kelas,
//             jurusan,
//             nohp,
//             password
//         })
//         await newUser.save();
//         res.json(newUser);
//     } catch (err) {
//         console.error(err.message);
//         resizeTores.status(500).send("server error");
//     }
// });

// app.post('/selfi/register/admin', async (req, res) => {
//     try {
//         const {
//             hp_guru,
//             nama_guru,
//             username,
//             password
//         } = req.body;
//         const newAdmin = new Admin({
//             hp_guru,
//             nama_guru,
//             username,
//             password
//         })
//         await newAdmin.save();
//         res.json(newAdmin);
//     } catch (err) {
//         console.error(err.message);
//         resizeTores.status(500).send("server error");
//     }
// });

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

app.listen(4500, () => {
    console.log(`Server started on 4500`);
});