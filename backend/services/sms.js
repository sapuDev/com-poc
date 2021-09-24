const {smsHelper} = require("../helpers");

const sendSMS = async (to, from, template, name) => {
    const res = await smsHelper.sendSMS(to, from, template, name);
    return res;
};
module.exports = {
  sendSMS
};
