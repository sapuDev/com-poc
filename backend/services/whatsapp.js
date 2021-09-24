const {whatsAppHelper} = require("../helpers");

const sendWhatsappMessage = async (to, from, template, name) => {
    const res = whatsAppHelper.senWhatsAppMessage(to, from, template, name);
    return res;
};
module.exports = {
  sendWhatsappMessage
};
