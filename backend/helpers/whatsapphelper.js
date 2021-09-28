const {ACCOUNT_SID, AUTH_TOKEN} = require("../config");
const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);
const templateHelper = require("./templateHelper");
const senWhatsAppMessage = (data) => {
    const { to, from, template, name, branch } = data;
    const newTemplate = templateHelper.SetTemplate(template);
    console.log("object", to, from, newTemplate, name, branch);

    try {
        client.messages
            .create({
                from: "whatsapp:+14155238886",
                body: `Hi ${name}, ${newTemplate} from  ${from}.`,
                to: "whatsapp:" + to,
            })
            .then((message) => console.log(message.sid));

        console.log("send whatsapp");
        return true;
    } catch (error) {
        console.log("error whatsapp", error);
        return error;
    }
};
module.exports = {
  senWhatsAppMessage
};
