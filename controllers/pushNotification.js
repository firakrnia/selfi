const FCM = require("fcm-node");
const serverKey = "AAAAMbpRjRw:APA91bH2DWcCT6gL95Y_x5NDI4G0e7gwSSyY1FMLYqkLR1FSBt9A-tQ7IDpY3S4UyBwKlxZ2ABIkWVOj2IxNVugdJoVXdzEQ4Dsn9j2hmBf939drDn1hfzWa0eceQhNJWWK5pmJRmZEi";
const controller = {};
const fetch = require("node-fetch");

controller.push = async function (req, res) {
    try {
        var notification = {
            'title' : 'Pengingat',
            'text' : 'Segera kerjakan tugas ...'
        };
        var notification_body = {
            'notification' : notification,
            'registration_ids' : serverKey
        };
        fetch('https://fcm.googleapis.com/fcm/send',{
            'method' : 'POST',
            'headers' : {
                'Authorization' : "key='"+ serverKey +"'",
                'Content-Type' : 'application/json'
            },
            'body' : JSON.stringify(notification_body)
        })
        res.status(200).send('Notifikasi berhasil terkirim');
    } catch (error) {
        res.status(404).send('Notifikasi gagal');
        console.log(error);
    }
}
//coba

// controller.push = async function (req, res){
//     try {
//         let fcm = new FCM(serverKey);

//         let message = {
//             to: "/topics/" + req.body.topic,
//             notification: {
//                 title: req.body.title,
//                 body: req.body.body,
//                 sound: "default",
//                 "click_Action": "FCM_PLUGIN_ACTIVITY",
//                 "icon": "fcm_push_icon",
//             }

//         }

//         fcm.send(message, (err, response)=>{
//             if(err){
//                 next(err);
//             }else {
//                 res.json(response);
//             }
//         })

//     } catch(error){
//         next(error);
//     }
// }

module.exports = controller;