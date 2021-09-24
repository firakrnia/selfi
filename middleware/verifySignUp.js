// const model = require("../models/index");
// const siswa = model.siswa;
// const kelas = model.kelas;

// checkDuplicateNis = (req, res, next)=>{
//     siswa.findOne({
//         where: {
//             nis:req.body.nis
//         }
//     }).then(siswa=>{
//         if (siswa){
//             reqres.status(400).send({
//                 msg : "Gagal!NIS sudah terdaftar"
//             });
//             return;
//         }
//         next();
//     });
// };

// checkKelasExisted = (req, ress, next)=> {
//     if (req.body.kelas) {
//         for (let i = 0; i < req.body.kelas.length; i++) {
//             if (!kelas){

//             }
//             const element = array[i];
            
//         }
//     }
// }