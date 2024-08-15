import { USLOGIN } from "../type/CyberBugs/CyberBugs";
import { GET_USER_BY_PROJECT_ID } from "../type/CyberBugs/UserType";


const { USER_LOGIN } = require("../../util/constants/settingSystem");

let usLogin = {};

if(localStorage.getItem(USER_LOGIN)) {
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}




const stateDefault =  {
    userLogin : usLogin,
    userSearch: [],
    arrUser:[
       
    ]
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
        case GET_USER_BY_PROJECT_ID:{
            return{...state,
                arrUser:action.arrUser
            }
        }


        default : return {...state};
    }
}