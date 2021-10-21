import {USER_ACTIONS} from "../actions/UserAction";

const userState = {
    userArray: [],
    userItem: {}
}


export default function userReducer( state = userState, callback ){

    switch( callback.type ){

        case USER_ACTIONS.LIST:
            return {
                ...state,
                userArray: callback.content
            }

        default:
            return state;

    }


}