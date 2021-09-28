const model = require("../models/index");
const controller = {};

const jwt = require("jsonwebtoken");
const passport = require("passport");
const passportJWT = require("passport-jwt");
let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "kksi_selfi";

let strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
    let siswa = getModel.siswa({
        id: jwt_payload.id
    });

    if (siswa) {
        next(null, siswa);
    } else {
        next(null, false);
    }
});
passport.use(strategy);
const getSiswa = async obj => {
    return await model.siswa.findOne({
        where: obj
    });
};

controller.postRegister = async function (req, res) {
    try {
        let siswa = await model.siswa.create({
            nis: req.body.nis,
            nama: req.body.nama,
            id_kelas: req.body.id_kelas,
            jurusan: req.body.jurusan,
            nohp: req.body.nohp,
            password: req.body.password
        })
            res.status(200).json({
                success: true,
                message: "Data siswa berhasil ditambahkan",
                data: siswa
            })

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

controller.postLogin = async function (req, res) {
    try {
        const {
            nis,
            password
        } = req.body;

        if (nis && password) {
            let siswa = await getSiswa({
                nis: nis
            });
            
            if (!siswa) {
                res.status(401).json({
                    message: "nis salah atau anda belum terdaftar",
                    success: false
            
                });
            }

            if (siswa.password === password) {
                let payload = {
                    id: siswa.id
                };

                let token = jwt.sign(payload, jwtOptions.secretOrKey);
                res.json({
                    message: "login berhasil",
                    token: token,
                    success: true,
                    data: siswa
                });
            } else {
                res.status(401).json({
                    message: "password salah",
                    success: false,
                    
                });
            }
        }
    } catch (err) {
        console.error(err.message);
        resizeTores.status(500).send("server error");
    }
    
}

module.exports = controller;