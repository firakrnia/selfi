const express = require('express');
const app = express();
const User = require("./models/user");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const passportJWT = require("passport-jwt");


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

const db = require("./config/database");

app.use(express.urlencoded({extended: true}));

db.authenticate().then(() => console.log("db berhasil terkoneksi"));
app.get('/', (req, res) => res.send("node bisa dibuka di rest api"));

app.post('/login', async(req, res) => {
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

app.get('/protected', passport.authenticate("jwt", {session: false}), (req, res) => {
    try {
        res.send("Selamat anda bisa mengakses route ini dengan passportjs");
    }catch(err){
        console.error(err.message);
        resizeTores.status(500).send("server error");
    }
    
});

app.get('/dikunci', passport.authenticate("jwt", {session: false}), (req, res) => {
    try {
        res.send("Selamat anda bisa mengakses route ini dengan passportjs");
    }catch(err){
        console.error(err.message);
        resizeTores.status(500).send("server error");
    }
    
});

app.post('/register', async(req, res) => {
    try{
        const {nis, password} = req.body;
        const newUser = new User({
            nis, password
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