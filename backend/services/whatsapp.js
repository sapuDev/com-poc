const {whatsAppHelper} = require("../helpers");

const sendWhatsappMessage = (to, from, template) => {
  whatsAppHelper.senWhatsAppMessage(to, from, template);
};
module.exports = {
  sendWhatsappMessage
};
