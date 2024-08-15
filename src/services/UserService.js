import { baseService } from "./baseService";

export class UserService extends baseService {

    constructor(){
        super();
    }

    getUser = (keyWord) => {
        console.log(keyWord);
       return this.get(`Users/getUser?keyword=${keyWord}`);
    }

    assignUserProject = (userProject) =>{
        return this.post(`Project/assignUserProject`,userProject)
    }
    getUserbyProjectId = (idProject)=>{
        return this.get(`Users/getUserByProjectId?idProject=${idProject}`)
    }

}


export const userService = new UserService();