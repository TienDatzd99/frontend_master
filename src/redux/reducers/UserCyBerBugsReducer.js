import { USLOGIN } from "../type/CyberBugs/CyberBugs";


const { USER_LOGIN } = require("../../util/constants/settingSystem");

let usLogin = {};

if(localStorage.getItem(USER_LOGIN)) {
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}




const stateDefault =  {
    userLogin : usLogin,
    userSearch: []
}



export const UserLoginCyberBugsReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case USLOGIN: {
            state.userLogin = action.userLogin;
            return {...state}
        }

        case 'GET_USER_SEARCH' :{
            state.userSearch = action.userData;
           
            return {...state}
        }


        default : return {...state};
    }
}