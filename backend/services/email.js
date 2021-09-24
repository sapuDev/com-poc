const {emailHelper} = require("../helpers");

const sendEmail = async (data) => {
    const res = await emailHelper.sendEmail(data);
    return res;
};
module.exports = {
  sendEmail
};
