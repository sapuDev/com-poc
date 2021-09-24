const {ACCOUNT_SID, AUTH_TOKEN} = require("../config");
const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);
const sendSMS = (to, from, template, name) => {
  client.messages
    .create({
      body: "Hi " + template + " to you " + name + " from " + from,
      from: "+12012796019",
      to: to
    })
    .then(message => console.log(message.sid));
};
module.exports = {
  sendSMS
};
