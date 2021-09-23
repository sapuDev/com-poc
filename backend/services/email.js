const {emailHelper} = require("../helpers");

const sendEmail = (to, template, name) => {
  emailHelper.sendEmail(to, template, name);
};
module.exports = {
  sendEmail
};
