const {smsHelper} = require("../helpers");

const sendSMS = async (data) => {
    const res = await smsHelper.sendSMS(data);
    return res;
};
module.exports = {
  sendSMS
};
