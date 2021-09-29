const model = require("../models/index");
const bcrypt = require("bcryptjs");
const controller = {};

const jwt = require("jsonwebtoken");
const tokenSecret = "kksi_selfi";

const getSiswa = async obj => {
    return await model.siswa.findOne({
        where: obj
    });
};

controller.postRegister = async function (req, res) {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    try {
        let siswa = await model.siswa.create({
            nis: req.body.nis,
            nama: req.body.nama,
            id_kelas: req.body.id_kelas,
            jurusan: req.body.jurusan,
            nohp: req.body.nohp,
            password: hashPassword
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
                // let payload = {
                //     id: siswa.id
                // };

                // let token = jwt.sign(payload, jwtOptions.secretOrKey);
                res.json({
                    message: "login berhasil",
                    token: generateToken(siswa),
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

function generateToken(siswa){
    let payload = {
        data: siswa.id
    };
    return jwt.sign(payload, tokenSecret);
}

module.exports = controller;