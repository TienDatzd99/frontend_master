
import { call, delay, fork, take, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { GET_PROJECT_LIST_SAGA, SET_PROJECT_LIST, USER_SIGNIN_API } from '../../type/CyberBugs/CyberBugs';
import { cyberbugsService } from '../../../services/CyberbugsService';
import { DISPLAY_LOADING, HIDE_LOADING } from '../../type/LoadingConst';
import { STATUS_CODE, TOKEN, USER_LOGIN } from '../../../util/constants/settingSystem';
import { useNavigate } from 'react-router-dom';
import { userService, userservice } from '../../../services/UserService';
import { GET_USER_BY_PROJECT_ID, GET_USER_BY_PROJECT_ID_SAGA } from '../../type/CyberBugs/UserType';

const MyComponent = () => {
    const navigate = useNavigate();
}
function* signinSaga(action) {
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);

    //Gọi api 
    try {
        const { data, status } = yield call(() => cyberbugsService.signinCyberBugs(action.userLogin));

        //Lưu vào localstorage khi đăng nhập thành công
        localStorage.setItem(TOKEN, data.content.accessToken);
        localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));

        console.log(data.content)





    } catch (err) {
        console.log(err.response.data)
    }


    yield put({
        type: HIDE_LOADING
    })

}

export function* theoDoiSignin() {
    yield takeLatest(USER_SIGNIN_API, signinSaga)
}

function* getUserSaga(action) {
    
    //action.keyWord

    //Gọi api 
    try {
        const { data, status } = yield call(() => userService.getUser(action.keyWord));
        console.log(data)

        if (status === 200) {
            yield put({ type: "GET_USER_SEARCH", userData: data.content });
          }
      
    }catch(err){ 
        
    }
}



export function* theoDoiGetUser () {
    yield takeLatest("GET_USER_API", getUserSaga);
}

function* addUserProjectSaga(action) {
    
    //action.keyWord

    //Gọi api 
    try {
        const { data, status } = yield call(() => userService.assignUserProject(action.userProject));
        console.log(data)

        if (status === STATUS_CODE.SUCCESS) {
            yield put({ type: GET_PROJECT_LIST_SAGA });
        }
        yield put({
            type: SET_PROJECT_LIST
        })
      
    }catch(err){ 
        console.log(err.response.data)
    }
}



export function* theoDoiAddUserProject () {
    yield takeLatest("ADD_USER_PROJECT_API", addUserProjectSaga);
}
function* getUserByProjectIdSaga(action) {
   
    //action.keyWord

    //Gọi api 
    try {
        const { data, status } = yield call(() => userService.getUserbyProjectId(action.idProject));
        

        if (status === STATUS_CODE.SUCCESS) {
            yield put({ type: GET_USER_BY_PROJECT_ID , arrUser: data.content});
        }
      
    }catch(err){ 
        console.log(err.response.data)
        if(err.response.data.statusCode === STATUS_CODE.NOT_FOUND){
            yield put({
                type: GET_USER_BY_PROJECT_ID,
                arrUser:[]
            })
        }
    }
}



export function* theodoiGetUserSaga () {
    yield takeLatest(GET_USER_BY_PROJECT_ID_SAGA, getUserByProjectIdSaga);
}
