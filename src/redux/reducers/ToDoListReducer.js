import { GET_TASK_API } from "../type/ToDoListType"


const initialState = {
    taskList:[]
}

export default (state = initialState, action) => {
    switch (action.type) {

    case GET_TASK_API:
        return { 
            ...state, 
            taskList: action.taskList // Tạo bản sao mới của state và cập nhật taskList
        }

    default:
        return state
    }
}