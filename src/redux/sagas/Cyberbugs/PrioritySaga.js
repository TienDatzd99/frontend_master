import { call, put, takeLatest } from "redux-saga/effects";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { priorityservice } from "../../../services/PriorityService";
import { GET_ALL_PRIORITY, GET_ALL_PRIORITY_SAGA } from "../../type/CyberBugs/PriorityConstant";

function* getAllPrioritytSaga(action) {
    try {


        const { data, status } = yield call(() => priorityservice.getAllPriority());
        console.log(data)
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_PRIORITY,
                arrPriority: data.content
            })
        }



    } catch (err) {
        console.log(err)
    }


}
export function* theoDoiGetPrioritySaga() {
    yield takeLatest(GET_ALL_PRIORITY_SAGA, getAllPrioritytSaga)
}
