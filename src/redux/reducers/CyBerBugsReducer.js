import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConst";
import { combineReducers } from 'redux';
const initialState = {
    loading: false,
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case DISPLAY_LOADING:
        return { ...state, loading: true };
      case HIDE_LOADING:
        return { ...state, loading: false };
      case 'USER_LOGIN_SUCCESS':
        return { ...state, user: action.payload, loading: false };
      case 'USER_LOGIN_FAILED':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  const rootReducer = combineReducers({
    auth: authReducer,
  });
  
  export default rootReducer;