const {EMAIL, PASSWORD} = require("../config");
const nodemailer = require("nodemailer");
var path = require("path");
var ejs = require("ejs");

const createEmailTemplate = (templateName, data) => {
    return new Promise((resolve, reject) => {
        const filePath = path.join("./assets/emailTemplates/", templateName);
        console.log("filePath", filePath);
        ejs.renderFile(filePath, data, (err, str) => {
            console.log("err", err);
            if (err) return reject(err);
            console.log("str", str);
            resolve(str);
        });
    });
};

const sendEmail = async (to, template, name) => {
    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL,
            pass: PASSWORD,
        },
    });
    console.log("template", template);
    console.log("name", name);
    const _template = await createEmailTemplate(`${template}.ejs`, { name });
    let mailDetails = {
        from: EMAIL,
        to: to,
        subject: "GREATINGS",
        html: _template,
    };
    console.log("mailDetails", mailDetails);
    mailTransporter.sendMail(mailDetails, function (err, data) {
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
