import { call, put, takeLatest } from "redux-saga/effects"
import TaskTypeService, { tasktypeservice } from "../../../services/TaskTypeService"
import { GET_ALL_TASK_TYPE, GET_ALL_TASK_TYPE_SAGA } from "../../type/CyberBugs/TasktypeConstant"
import { taskservice } from "../../../services/TaskService"
import { notifiFunction } from "../../../util/Notification/notificationcyberbugs"
import { statusservice } from "../../../services/StatusService"

function* GetStatusSaga(action) {
    try {
        const { data, status } = yield call(() => statusservice.getAllStatus())
console.log(data)
        yield put({
            type: "GET_ALL_STATUS",
            arrStatus:data.content
        })
      


    } catch (err) {

    }
}

export function* theodoiGetAllStatus(){
    yield takeLatest("GET_ALL_STATUS_SAGA",GetStatusSaga)
}

