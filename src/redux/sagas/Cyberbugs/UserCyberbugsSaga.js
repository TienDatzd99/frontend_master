import Axios from 'axios';
import { call, delay, fork, take, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { USER_SIGNIN_API } from '../../type/CyberBugs/CyberBugs';
import { cyberbugsService } from '../../../services/CyberbugsService';
import { DISPLAY_LOADING, HIDE_LOADING } from '../../type/LoadingConst';
import { TOKEN, USER_LOGIN } from '../../../util/constants/settingSystem';


function* signinSaga(action) {
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay (500);

    //Gọi api 
    try {
        const { data, status } = yield call(() => cyberbugsService.signinCyberBugs(action.userLogin));
        
        //Lưu vào localstorage khi đăng nhập thành công
        localStorage.setItem(TOKEN,data.content.accessToken);
        localStorage.setItem(USER_LOGIN,JSON.stringify(data.content));

        console.log(data);
    

    }catch(err){ 
        console.log(err.response.data)
    }

    
    yield put({
        type: HIDE_LOADING
    })

}

export function* theoDoiSignin() {
    yield takeLatest(USER_SIGNIN_API, signinSaga)
}