const {ACCOUNT_SID, AUTH_TOKEN} = require("../config");
const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);
const templateHelper = require("./templateHelper");

const sendSMS = async (data) => {
    const { to, from, template, name, branch } = data;
    const newTemplate = templateHelper.SetTemplate(template);
    try {
        client.messages
            .create({
                body: `Hi ${name}, ${newTemplate} from  ${from}.`,
                from: "+12012796019",
                to: to,
            })
            .then((message) => console.log(message.sid));

        console.log("send SMS");
        return true;
    } catch (error) {
        console.log("error", error);
        return error;
    }
};
module.exports = {
  sendSMS
};
