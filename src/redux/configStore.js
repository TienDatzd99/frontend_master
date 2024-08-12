import {combineReducers,applyMiddleware } from 'redux';
 import { configureStore } from '@reduxjs/toolkit';
import ToDoListReducer from './reducers/ToDoListReducer';
import { ModalReducer } from './reducers/ModalReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
import { ProjectCategoryReducer } from './reducers/ProjectCategoryRudecer';
import { ProjectCyberBugsReducer } from './reducers/ProjectCyberBugsReducer';
import {DrawerCyberbugsReducer} from './reducers/DrawerCyberbugsReducer';
import { ProjectReducer } from './reducers/ProjectReducer';
import { UserLoginCyberBugsReducer } from './reducers/UserCyBerBugsReducer';


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  //  ToDoListReducer,
   ModalReducer,
   ProjectCategoryReducer,
   ProjectCyberBugsReducer,
   DrawerCyberbugsReducer,
   ProjectReducer,
   UserLoginCyberBugsReducer
})



const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
       thunk: false,
       serializableCheck: false,
     }).concat(sagaMiddleware),
 });
 sagaMiddleware.run(rootSaga);


export default store;

