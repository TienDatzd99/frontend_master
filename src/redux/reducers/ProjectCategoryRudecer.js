import { GET_DATA_PROJECT_CATEGORY } from "../type/CyberBugs/CyberBugs"

const stateDefault = {
   arrayProjectCategory:[]
}


export const ProjectCategoryReducer =(state = stateDefault, action) => {
    switch (action.type) {
        case GET_DATA_PROJECT_CATEGORY: {
            console.log('action', action)
            
            return {...state,
                arrayProjectCategory:action.data
            }
        }
        default:
        return {...state}
    }


}