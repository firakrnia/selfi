const FCM = require("fcm-node");
const serverKey = "AAAAMbpRjRw:APA91bH2DWcCT6gL95Y_x5NDI4G0e7gwSSyY1FMLYqkLR1FSBt9A-tQ7IDpY3S4UyBwKlxZ2ABIkWVOj2IxNVugdJoVXdzEQ4Dsn9j2hmBf939drDn1hfzWa0eceQhNJWWK5pmJRmZEi";
const controller = {};

controller.push = async function (req, res){
    try {
        let fcm = new FCM(serverKey);

        let message = {
            to: "/topics/" + req.body.topic,
            notification: {
                title: req.body.title,
                body: req.body.body,
                sound: "default",
                "click_Action": "FCM_PLUGIN_ACTIVITY",
                "icon": "fcm_push_icon",
            }

        }

        fcm.send(message, (err, response)=>{
            if(err){
                next(err);
            }else {
                 res.json(response);
            }
        })

    } catch(error){
        next(error);
    }
}

module.exports = controller;