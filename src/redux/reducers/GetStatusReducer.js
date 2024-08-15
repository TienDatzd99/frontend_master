const initialState = {
    arrStatus:[]
}

export const GetStatusReducer = (state = initialState,action) => {
  switch (action.type) {

  case "GET_ALL_STATUS":
console.log(action.arrStatus)
    return { ...state, 
        arrStatus: action.arrStatus
     }

  default:
    return state
  }
}
