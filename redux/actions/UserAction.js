import UserService from '../../services/UserService';

export const USER_ACTIONS = {
    LIST: "USER_LIST",
    FIND_BY_ID: "USER_FIND_BY_ID",
    SAVE: "USER_SAVE",
    UPDATE: "USER_UPDATE",
    DELETE: "USER_DELETE"  
}

export function userList(){
    return function(callback) {
        UserService.list()
            .then( response => {

                console.log(response.data);

                callback({
                    type: USER_ACTIONS.LIST,
                    content: response.data
                });
            })
            .catch( error => { console.log("ERROR = ", error) } )  
    }
}