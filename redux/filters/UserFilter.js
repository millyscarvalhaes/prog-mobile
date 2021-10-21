import values from "lodash/values";

export const userFilter = ({userState}) => {
    return {
        userArray: values(userState.userArray),
        userItem: userState.userItem    
    }
    
}