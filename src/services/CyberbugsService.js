import axios from "axios"
import { DOMAIN_CYBERBUG } from "../util/constants/settingSystem"

export const cyberbugsService ={
    signinCyberBugs: (userLogin)=>{
        return axios({
            url:`${DOMAIN_CYBERBUG}/User/Login`,
            method:'POST',
            data: userLogin
        })
    
    }
}