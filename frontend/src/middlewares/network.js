import axios from 'axios';
import urlMap from "./config";
import { notification } from "antd";

const openNotification = () => {
    notification.success({
        message: "Successfully sent.",
        className: "custom-class",
        style: {
            width: 400,
        },
    });
};

const openFailNotification = () => {
    notification.error({
        message: "Fail to sent.",
        className: "custom-class",
        style: {
            width: 400,
        },
    });
};

const sendMessages = (props, callback) => {
    const { to, type, email, branch, name, from, send } = props;
    axios
        .post(urlMap.send, {
            name,
            type,
            to,
            email,
            template: type,
            from,
            branch,
            send,
        })
        .then(function (response) {
            if (callback) callback();
            openNotification();
            console.log(response);
        })
        .catch(function (error) {
            if (callback) callback();
            openFailNotification();
            console.log(error);
        });
};
export {
  sendMessages
}
 