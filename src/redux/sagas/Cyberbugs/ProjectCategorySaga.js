import { call, put, takeLatest } from "redux-saga/effects";
import { cyberbugsService } from "../../../services/CyberbugsService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_PROJECT_CATEGORY_SAGA, GET_DATA_PROJECT_CATEGORY } from "../../type/CyberBugs/CyberBugs";


function* getAllProjectCategorySaga(action) {
    try {
        const { data, status } = yield call(() => cyberbugsService.getAllProjectCategory())

        console.log('data', data)
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_DATA_PROJECT_CATEGORY,
                data: data.content
            })
        }

    } catch (err) {
        console.log(err)
    }

}


export function* theoDoiProjectCategory() {
    yield takeLatest(GET_ALL_PROJECT_CATEGORY_SAGA, getAllProjectCategorySaga)
}