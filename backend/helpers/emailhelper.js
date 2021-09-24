const {EMAIL, PASSWORD} = require("../config");
const nodemailer = require("nodemailer");

const sendEmail = (to, template, name) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD
    }
  });

  let mailDetails = {
    from: EMAIL,
    to: to,
    subject: "GREATINGS",
    text: "HI " + template + " to you " + name
  };

  mailTransporter.sendMail(mailDetails, function(err, data) {
    if (err) {
      console.log("Error Occurs", err);
      return err;
    } else {
      console.log("Email sent successfully");
      return true;
    }
  });
};
module.exports = {
  sendEmail
};
