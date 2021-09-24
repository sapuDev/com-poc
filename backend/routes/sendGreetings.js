var express = require("express");
var router = express.Router();
const {whatsappService, emailService, smsService} = require("../services");

router.post("/", function(req, res, next) {
  try {
    switch (req.body.type) {
      case "E":
        emailService.sendEmail(
          req.body.email,
          req.body.template,
          req.body.name
        );
        break;
      case "W":
        whatsappService.sendWhatsappMessage(
          req.body.contact,
          req.body.from,
          req.body.template
        );
        break;
      case "EW":
        emailService.sendEmail(
          req.body.email,
          req.body.template,
          req.body.name
        );
        whatsappService.sendWhatsappMessage(
          req.body.contact,
          req.body.from,
          req.body.template
        );
        break;
      case "S":
        smsService.sendSMS(req.body.contact, req.body.from, req.body.template);
        break;
      case "ES":
        emailService.sendEmail(
          req.body.email,
          req.body.template,
          req.body.name
        );
        smsService.sendSMS(req.body.contact, req.body.from, req.body.template);
      default:
        break;
    }

    res.send("respond with a resource", req);
  } catch (error) {
    next;
  }
});

module.exports = router;
