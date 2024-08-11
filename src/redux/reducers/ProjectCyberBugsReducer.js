import {  SET_PROJECT_LIST } from "../type/CyberBugs/CyberBugs"

const stateDefault = {
    projectList: [
        { id: '1', projectName: 'abc', description: 'abc' }
    ]
}


export const ProjectCyberBugsReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_PROJECT_LIST: {
            console.log(action.projectList)
            return {
                ...state,
                projectList: action.projectList
            }
        }

        default:
            return { ...state }


    }
}