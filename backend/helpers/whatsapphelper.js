const {ACCOUNT_SID, AUTH_TOKEN} = require("../config");
const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);
const senWhatsAppMessage = (to, from, template, name) => {
  client.messages
    .create({
      from: "whatsapp:+14155238886",
      body: "Hi " + template + " to you " + name + " from " + from,
      to: "whatsapp:"+to
    })
    .then(message => console.log(message.sid));
};
module.exports = {
  senWhatsAppMessage
};
