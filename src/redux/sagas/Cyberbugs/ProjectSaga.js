import { call, delay, put, takeLatest } from "redux-saga/effects";
import { cyberbugsService } from "../../../services/CyberbugsService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { CREAT_PROJECT_SAGA, GET_ALL_PROJECT_CATEGORY_SAGA, GET_LIST_PROJECT_SAGA, GET_PROJECT_LIST, GET_PROJECT_LIST_SAGA, SET_PROJECT_LIST } from "../../type/CyberBugs/CyberBugs";
import { DISPLAY_LOADING, HIDE_LOADING } from "../../type/LoadingConst";
import { projectService, ProjectService } from "../../../services/ProjectService";
import { notifiFunction } from "../../../util/Notification/notificationcyberbugs";


function* createProjectSaga(action) {
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);
    try {
        const { data, status } = yield call(() => cyberbugsService.createProjectAuthorization(action.newProject))


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
        console.log(data)
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: SET_PROJECT_LIST,
                projectList: data.content
            })
        }



    } catch (err) {
        console.log(err)
    }


}
export function* theoDoiGetListProjectSaga() {
    yield takeLatest(GET_PROJECT_LIST_SAGA, getListProjectSaga)
}



function* UpdateProject(action) {

    try {


        const { data, status } = yield call(() => cyberbugsService.UpdateProject(action.projectUpdate));

        if (status === STATUS_CODE.SUCCESS) {
            yield put({ type: GET_PROJECT_LIST_SAGA });
        }
        yield put({
            type: SET_PROJECT_LIST
        })
        yield put({
            type: 'CLOSE_DRAWER'
        })

    } catch (err) {
        console.log(err)
    }


}
export function* theoDoiUpdateProjectSaga() {
    yield takeLatest('UPDATE_PROJECT_SAGA', UpdateProject)
}
function* DeleteProject(action) {
    try {

        console.log(action)
        const { data, status } = yield call(() => projectService.deleteProject(action.idProject));

        if (status === STATUS_CODE.SUCCESS) {
            notifiFunction('success','Delete project success')
        }
        yield call(getListProjectSaga)

    } catch (err) {
        console.log(err)
        notifiFunction('error','Delete project error')
    }
}

export function* theoDoiDeleteProject() {
    yield takeLatest('DELETE_PROJECT_SAGA', DeleteProject)
}


function* getProjectDetailSaga(action) {
    try {

        const { data, status } = yield call(() => projectService.getProjectDetail(action.projectId));
        yield put({
            type: 'PUT_PROJECT_DETAIL',
            projectDetail: data
        })

    } catch (err) {
        console.log(err)
        
    }
}

export function* theoDoiGetProjectDetail() {
    yield takeLatest('GET_PROJECT_DETAIL', getProjectDetailSaga)
}
