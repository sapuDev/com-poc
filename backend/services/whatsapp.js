const {whatsAppHelper} = require("../helpers");

const sendWhatsappMessage = async (data) => {
    const res = whatsAppHelper.senWhatsAppMessage(data);
    return res;
};
module.exports = {
  sendWhatsappMessage
};
