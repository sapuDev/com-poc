var express = require("express");
var router = express.Router();
const {whatsappService, emailService, smsService} = require("../services");

router.post("/", async function (req, res, next) {
    try {
        const { type, template, email, name, from, to, branch, send } = req.body;
        let typeCase = null;
        if (send.includes("sendEmails")) {
            typeCase = "E";
        }

        if (send.includes("sendSms")) {
            typeCase = typeCase ? typeCase + "S" : "S";
        }

        if (send.includes("sendWhatsap")) {
            typeCase = typeCase ? typeCase + "W" : "W";
        }
        console.log("typeCase", typeCase);
        switch (typeCase) {
            case "E":
                await emailService.sendEmail({ email, template, name, branch, from });
                break;
            case "S":
                await smsService.sendSMS({ to, from, template, name, branch });
                break;
            case "W":
                await whatsappService.sendWhatsappMessage({ to, from, template, name, branch });
                break;
            case "ES":
                await emailService.sendEmail({ email, template, name, branch, from });
                await smsService.sendSMS({ to, from, template, name, branch });
            case "EW":
                await emailService.sendEmail({ email, template, name, branch, from });
                await whatsappService.sendWhatsappMessage({ to, from, template, name, branch });
                break;
            case "SW":
                await smsService.sendSMS({ to, from, template, name, branch });
                await whatsappService.sendWhatsappMessage({ to, from, template, name, branch });
                break;
            case "ESW":
                await emailService.sendEmail({ email, template, name, branch, from });
                await smsService.sendSMS({ to, from, template, name, branch });
                await whatsappService.sendWhatsappMessage({ to, from, template, name, branch });
            default:
                break;
        }
        res.send("respond with a resource");
    } catch (error) {
        next;
    }
});

module.exports = router;
