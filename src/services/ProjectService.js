import { baseService } from "./baseService";


export class ProjectService extends baseService{
    constructor(){
        super()
    }
    getAllProject =()=>{
        return this.get(`/Project/getAllProject`)
    }

    deleteProject =(id) =>{
        return this.delete(`Project/deleteProject?projectId=${id}`)
    }

getProjectDetail =(id) =>{
    return this.get(`Project/getProjectDetail?id=${id}`)
}
}
export const projectService = new ProjectService()