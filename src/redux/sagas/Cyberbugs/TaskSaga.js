import { call, put, takeLatest } from "redux-saga/effects"
import TaskTypeService, { tasktypeservice } from "../../../services/TaskTypeService"
import { GET_ALL_TASK_TYPE, GET_ALL_TASK_TYPE_SAGA } from "../../type/CyberBugs/TasktypeConstant"
import { taskservice } from "../../../services/TaskService"
import { notifiFunction } from "../../../util/Notification/notificationcyberbugs"

function* createTaskSaga(action) {
    try {
        const { data, status } = yield call(() => taskservice.getAllTasktype(action.TaskObject))
console.log(data)
        yield put({
            type: "CLOSE_DRAWER",
            
        })
        notifiFunction('success','Create Task success')


    } catch (err) {

    }
}

export function* theodoiCreateTaskSaga(){
    yield takeLatest("CREATE_TASK_SAGA",createTaskSaga)
}

