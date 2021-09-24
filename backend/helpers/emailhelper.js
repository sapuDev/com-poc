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
            console.log("str");
            resolve(str);
        });
    });
};

const sendEmail = async (data) => {
    const { email, template, name, branch } = data;
    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL,
            pass: PASSWORD,
        },
    });
    console.log("template", template);
    console.log("name", name);
    console.log("branch", branch);
    const _template = await createEmailTemplate(`${template}.ejs`, { name, branch });
    let mailDetails = {
        from: EMAIL,
        to: email,
        subject: "GREATINGS",
        html: _template,
    };

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
