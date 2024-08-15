import {  SET_PROJECT_LIST } from "../type/CyberBugs/CyberBugs"

const stateDefault = {
    projectList: [
        { id: '1', projectName: 'abc', description: 'abc' }
    ],
  
}


export const ProjectCyberBugsReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_PROJECT_LIST: {
           
            return {
                ...state,
                projectList: action.projectList
            }
        }
        // case "GET_ALL_PROJECT":{
        //     return {
        //         ...state,
        //         arrProject: action.arrProject
        //     }
        // }

        default:
            return { ...state }


    }
}