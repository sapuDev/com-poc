import axios from 'axios';
import urlMap from './config'

const sendMessages = (props)=>{
   const {name , to, from, template, type, email} = props
    axios.post(urlMap.send, {
        name:'name',
        type:'W',
        contact:to,
        email:email,
        template:'Happy Birthday',
        from:'combank'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
export {
  sendMessages
}
 