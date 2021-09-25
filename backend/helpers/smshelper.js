const {ACCOUNT_SID, AUTH_TOKEN} = require("../config");
const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);
const sendSMS = async (data) => {
    const { to, from, template, name, branch } = data;
    try {
        client.messages
            .create({
                body: "Hi " + template + " to you " + name + " from " + from,
                from: "+12012796019",
                to: to,
            })
            .then((message) => console.log(message.sid));

            console.log('send SMS');
        return true;
    } catch (error) {
        console.log('error',error);
        return error;
    }
};
module.exports = {
  sendSMS
};
