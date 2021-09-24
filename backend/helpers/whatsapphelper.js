const {ACCOUNT_SID, AUTH_TOKEN} = require("../config");
const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);
const senWhatsAppMessage = (to, from, template) => {
  client.messages
    .create({
      from: "whatsapp:+14155238886",
      body: "Hi " + template + " to you " + to + " from " + from,
      to: "whatsapp:+94710985700"
    })
    .then(message => console.log(message.sid));
};
module.exports = {
  senWhatsAppMessage
};
