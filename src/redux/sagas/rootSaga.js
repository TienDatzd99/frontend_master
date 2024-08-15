import { all } from "redux-saga/effects";

// import {theoDoiActionGetTaskApi} from './ToDoListSaga'
import * as Cyberbugs from './Cyberbugs/UserCyberbugsSaga'
import * as ProjectCategorySaga from './Cyberbugs/ProjectCategorySaga'
import * as ProjectSaga from './Cyberbugs/ProjectSaga'
import * as UserCyberbugsSaga from './Cyberbugs/UserCyberbugsSaga'
import * as TaskTypeSaga from './Cyberbugs/TaskTypeSaga'
import * as TaskSaga from './Cyberbugs/TaskSaga'
import * as PrioritySaga from './Cyberbugs/PrioritySaga'
import * as StatusSaga from './Cyberbugs/StatusSaga'
export function* rootSaga() {

  yield all([
    //Nghiệp vụ theo dõi các action saga todolist
 
    
    //Nghiệp vụ cyberbugs .... ,
    Cyberbugs.theoDoiSignin(),
    ProjectCategorySaga.theoDoiProjectCategory(),
    ProjectSaga.theoDoicreateProjectSaga(),
    ProjectSaga.theoDoiGetListProjectSaga(),
    ProjectSaga.theoDoiUpdateProjectSaga(),
    ProjectSaga.theoDoiDeleteProject(),
    UserCyberbugsSaga.theoDoiGetUser(),
    UserCyberbugsSaga.theoDoiAddUserProject(),
    ProjectSaga.theoDoiGetProjectDetail(),
    TaskTypeSaga.theodoiGetAllTaskTypeSaga(),
    PrioritySaga.theoDoiGetPrioritySaga(),
    TaskSaga.theodoiCreateTaskSaga(),
    StatusSaga.theodoiGetAllStatus(),
    UserCyberbugsSaga.theodoiGetUserSaga()

    // ProjectSaga.theoDoiGetAllProjectSaga()
  ])


}