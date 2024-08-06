import { all } from "redux-saga/effects";

// import {theoDoiActionGetTaskApi} from './ToDoListSaga'
import * as Cyberbugs from './Cyberbugs/UserCyberbugsSaga'

export function* rootSaga() {

  yield all([
    //Nghiệp vụ theo dõi các action saga todolist
 
    
    //Nghiệp vụ cyberbugs .... ,
    Cyberbugs.theoDoiSignin()
  ])


}