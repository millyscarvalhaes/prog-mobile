import axios from 'axios'; 

const API_URL = "http://localhost:3000/users";

const list = () => {
    return axios.get( API_URL);
}

const save = (user) => {
    return axios.post(API_URL,user);
}

export default { list, save }

