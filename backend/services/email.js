const {emailHelper} = require("../helpers");

const sendEmail = async (to, template, name) => {
    const res = await emailHelper.sendEmail(to, template, name);
    return res;
};
module.exports = {
  sendEmail
};
