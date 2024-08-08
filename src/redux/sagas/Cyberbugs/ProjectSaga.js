import { call, delay, put, takeLatest } from "redux-saga/effects";
import { cyberbugsService } from "../../../services/CyberbugsService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { CREAT_PROJECT_SAGA, GET_ALL_PROJECT_CATEGORY_SAGA, GET_LIST_PROJECT_SAGA, GET_PROJECT_LIST } from "../../type/CyberBugs/CyberBugs";
import { DISPLAY_LOADING, HIDE_LOADING } from "../../type/LoadingConst";


function* createProjectSaga(action) {
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);
    try {
        const { data, status } = yield call(() => cyberbugsService.createProjectAuthorization(action.newProject))

        console.log('data', data)
        // if (status === STATUS_CODE.SUCCESS) {
        //     yield put({
        //         type: CREAT_PROJECT_SAGA,
        //         data: data.content
        //     })
        // }

    } catch (err) {
        console.log(err)
    }
    yield put({
        type: HIDE_LOADING
    })
    yield delay(500);
}


export function* theoDoicreateProjectSaga() {
    yield takeLatest(CREAT_PROJECT_SAGA, createProjectSaga)
}

function* getListProjectSaga(action) {
    try {


        const { data, status } = yield call(() => cyberbugsService.getListProject());
        console.log('data',data)
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_PROJECT_LIST,
                projectList: data.content
            })
        }



    } catch (err) {
        console.log(err)
    }


}
export function* theoDoiGetListProjectSaga() {
    yield takeLatest(GET_PROJECT_LIST, getListProjectSaga)
}