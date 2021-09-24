const model = require("../models/index");
// const response =  require("../response");
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
                message: "Data siswa berhasil ditambahkan",
                data: siswa
            })

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

// if (err) response.login(false, err.sqlMessage, null, res)

        // else if (siswa.length > 0) response.login(true, "Login Success", rows[0], res)
        // else response.login(false, "Wrong sername or password", null, res)
        // else if (rows[0] == null) response.login(false, "Wrong sername or password", null, res)
        // else response.login(true, "Login Success", rows[0], res)

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
                // response.login(false, "nis salah atau anda belum terdaftar", null, res)
                res.status(401).json({
                    message: "nis salah atau anda belum terdaftar",
                    success: "false"
            
                });
            }

            if (siswa.password === password) {
                let payload = {
                    id: siswa.id
                };

                let token = jwt.sign(payload, jwtOptions.secretOrKey);
                // response.login(true, "Login Berhasil", siswa[0], token, res)
                res.json({
                    message: "login berhasil",
                    token: token,
                    success: "true"
                });
            } else {
                // response.login(false, "password salah", null, res)
                res.status(401).json({
                    message: "password salah",
                    success: "false",
                    data: siswa
                });
            }
        }
    } catch (err) {
        console.error(err.message);
        resizeTores.status(500).send("server error");
    }
    // try {
        // let siswa = await model.siswa.findAll()
        
    //}
            // if (siswa.length > 0) {
            //     res.status(200).json({
            //         message: "GET Method Siswa",
            //         data: siswa
            //     });
            // } else {
            //     res.status(200).json({
            //         message: "Tidak ada data",
            //         data: []
            //     });

            // }
    // } catch (error) {
    //     res.status(404).json({
    //         message: error.message
    //     });
    // }
}

module.exports = controller;