import axios from 'axios';
import urlMap from './config'

const sendMessages = (props, callback) => {
    const { to, template, type, email } = props;
    axios
        .post(urlMap.send, {
            name: "name",
            type,
            to,
            email,
            template,
            from: "combank",
        })
        .then(function (response) {
            if (callback) callback();
            console.log(response);
        })
        .catch(function (error) {
            if (callback) callback();
            console.log(error);
        });
};
export {
  sendMessages
}
 