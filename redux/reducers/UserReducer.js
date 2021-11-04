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
                userItem: {},
                userArray: callback.content
            }

        case USER_ACTIONS.FIND_BY_ID:
            return{
                ...state,
                userItem: callback.content
            }

        case USER_ACTIONS.DELETE:
            return{
                ...state,
                userItem: {},
                userArray: state.userArray.filter( user => {
                    return user.id != callback.content
                })
            }

        case USER_ACTIONS.SAVE:
            return {
                ...state,
                userItem: {},
                userArray: state.userArray.concat(callback.content)
            }

        case USER_ACTIONS.UPDATE:
            return{
                ...state,
                userItem: {},
                userArray: state.userArray.map( user => {
                    return user.id == callback.content.id ? callback.content : user;
                })
            }

        default:
            return state;

    }


}