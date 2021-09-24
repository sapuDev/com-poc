const {smsHelper} = require("../helpers");

const sendSMS = (to, from, template, name) => {
  smsHelper.sendSMS(to, from, template, name);
};
module.exports = {
  sendSMS
};
