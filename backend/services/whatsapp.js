const {whatsAppHelper} = require("../helpers");

const sendWhatsappMessage = (to, from, template, name) => {
  whatsAppHelper.senWhatsAppMessage(to, from, template, name);
};
module.exports = {
  sendWhatsappMessage
};
