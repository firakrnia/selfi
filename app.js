const express = require('express');
const User = require("./models/user");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const passportJWT = require("passport-jwt");

const app = express();

const db = require("./config/database");

db.authenticate().then(() => console.log("db berhasil terkoneksi"));

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy; 

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "kksi_selfi";

let strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
    let user= getUser({id: jwt_payload.id});

    if (user){
        next(null, user);
    }else {
        next(null, false);
    }
});

passport.use(strategy);

const getUser = async obj => {
    return await User.findOne({
        where: obj
    });
};

//ini midddleware
app.use(express.urlencoded({extended: true}));

app.get('/selfi', (req, res) => res.send("Selamat datang di Selfi"));

app.post('/selfi/login', async(req, res) => {
    try {
        const{ nis, password} = req.body;

        if (nis && password){
            let user = await getUser({nis : nis});

            if (!user){
                res.status(401).json({message: "nis salah atau anda belum terdaftar"});
            }

            if(user.password === password){
                let payload = {id: user.id};

                let token = jwt.sign(payload, jwtOptions.secretOrKey);

                 res.json({msg: "oke", token: token});
            }else{
                res.status(401).json({message: "password salah"});
            }
        }
    }catch (err){
        console.error(err.message);
        resizeTores.status(500).send("server error");
    }
});

//url ke menu profil
app.get('/selfi/profil', passport.authenticate("jwt", {session: false}), (req, res) => {
    try {
        res.send("Selamat anda bisa mengakses route ini dengan passportjs");
    }catch(err){
        console.error(err.message);
        resizeTores.status(500).send("server error");
    }
    
});

// url menu utama
app.get('/selfi/utama', passport.authenticate("jwt", {session: false}), (req, res) => {
    try {
        res.send("Selamat anda bisa mengakses route ini dengan passportjs");
    }catch(err){
        console.error(err.message);
        resizeTores.status(500).send("server error");
    }
    
});

app.post('/selfi/register', async(req, res) => {
    try{
        const {nis, nama, kelas, jurusan, nohp, password} = req.body;
        const newUser = new User({
            nis, nama, kelas, jurusan, nohp, password
        })
        await newUser.save();
         res.json(newUser);
    }catch (err){
        console.error(err.message);
        resizeTores.status(500).send("server error");
    }
});

app.listen(4500, () => {
  console.log(`Server started on 4500`);
});