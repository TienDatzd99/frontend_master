import { message } from "antd"

const initialState = {
    message:'',
    description:''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "SHOW_NOTIFICATION":
    return { ...state, ...payload }

  default:
    return state
  }
}
