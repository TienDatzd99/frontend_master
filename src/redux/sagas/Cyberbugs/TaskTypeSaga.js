import { call, put, takeLatest } from "redux-saga/effects"
import TaskTypeService, { tasktypeservice } from "../../../services/TaskTypeService"
import { GET_ALL_TASK_TYPE, GET_ALL_TASK_TYPE_SAGA } from "../../type/CyberBugs/TasktypeConstant"

function* getAllTaskTypeSaga(action) {
    try {
        const { data, status } = yield call(() => tasktypeservice.getAllTasktype())

        yield put({
            type: GET_ALL_TASK_TYPE,
            arrTaskType: data.content
        })


    } catch (err) {

    }
}

export function* theodoiGetAllTaskTypeSaga(){
    yield takeLatest(GET_ALL_TASK_TYPE_SAGA,getAllTaskTypeSaga)
}

