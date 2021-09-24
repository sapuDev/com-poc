const {ACCOUNT_SID, AUTH_TOKEN} = require("../config");
const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);
const senWhatsAppMessage = (data) => {
    const { to, from, template, name, branch } = data;
    try {
        client.messages
            .create({
                from: "whatsapp:+14155238886",
                body: "Hi " + template + " to you " + name + " from " + from,
                to: "whatsapp:" + to,
            })
            .then((message) => console.log(message.sid));
        return true;
    } catch (error) {
        return error;
    }
};
module.exports = {
  senWhatsAppMessage
};
