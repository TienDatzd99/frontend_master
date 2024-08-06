import { USER_SIGNIN_API } from '../type/CyberBugs/CyberBugs'



export const signinCyberbugsAction = (email, password) => {
    return {
        type: USER_SIGNIN_API,
        userLogin: {
            email: email,
            password: password
        }
    }
}