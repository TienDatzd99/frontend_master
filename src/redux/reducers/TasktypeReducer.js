import { GET_ALL_TASK_TYPE } from "../type/CyberBugs/TasktypeConstant"

const initialState = {
    arrTaskType: []
}

export const TaskTypeReducer= (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_TASK_TYPE:
            return {
                ...state,
                arrTaskType : action.arrTaskType
            }

        default:
            return state
    }
}
