const {smsHelper} = require("../helpers");

const sendSMS = (to, from, template) => {
  smsHelper.sendSMS(to, from, template);
};
module.exports = {
  sendSMS
};
