import axios from 'axios'; 

const API_URL = "http://localhost:3000/users";

const list = () => {
    return axios.get( API_URL);
}

const save = (user) => {

    if(user.id == undefined){
        return axios.post(API_URL,user);
    } 
    else {
        return axios.put(API_URL+"/"+user.id,user);
    }


}

const findById = (id) => {
    return axios.get(API_URL+"/"+id);
}

const deleteById = (id) => {
    return axios.delete(API_URL+"/"+id)
}

export default { list, save, findById, deleteById }

