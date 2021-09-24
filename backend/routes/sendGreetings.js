var express = require("express");
var router = express.Router();
const {whatsappService, emailService, smsService} = require("../services");

router.post("/", async function (req, res, next) {
    try {
        const { type, template, email, name, from, to, branch } = req.body;
        let typeCase = email && to ? "ESW" : email ? "E" : null;
        switch (typeCase) {
            case "E":
                await emailService.sendEmail(email, template, name);
                break;
            case "W":
                await whatsappService.sendWhatsappMessage(to, from, template, name);
                break;
            case "EW":
                await emailService.sendEmail(email, template, name);
                await whatsappService.sendWhatsappMessage(to, from, template, name);
                break;
            case "S":
                await smsService.sendSMS(to, from, template, name);
                break;
            case "ES":
                await emailService.sendEmail(email, template, name);
                await smsService.sendSMS(to, from, template, name);
            case "ESW":
                await emailService.sendEmail(email, template, name);
                await smsService.sendSMS(to, from, template, name);
                await whatsappService.sendWhatsappMessage(to, from, template, name);
            default:
                break;
        }
        res.send("respond with a resource");
    } catch (error) {
        next;
    }
});

module.exports = router;
