import axios from 'axios'; // Sử dụng default instance của Axios
import { ADD_TASK_API, CYBERBUGS_LOGIN, GET_TASK_API } from "../type/ToDoListType";

export const getTaskListApi = () => {
  return dispatch => {
    let promise = axios({
      url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
      method: 'GET'
    });

    promise.then((result) => {
      console.log(result.data);
      // Nếu gọi api lấy về kết quả thành công 
      // => set lại state của component
      dispatch({
        type: GET_TASK_API,
        taskList: result.data
      });

      console.log('thành công');
    });

    promise.catch((err) => {
      console.log('thất bại');
      console.log(err.response.data);
    });
  }
}


export const addTaskApi = (taskName) => {
  return dispatch => {
    let promise = axios({
      url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
      method: 'POST',
      data: { taskName: taskName }
    });

    //Xử lý thành công
    promise.then(result => {
      // alert(result.data);
      dispatch(getTaskListApi())
    })

    //Xử lý thất bại
    promise.catch(errors => {
      alert(errors.response.data)

    })
  }
}
export const deleteTaskApi = (taskName) => {
  return dispatch => {
    let promise = axios({
      url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
      method: 'DELETE'
    });

    promise.then(result => {
      alert(result.data);
      dispatch(getTaskListApi())
    });

    promise.catch(errors => {
      alert(errors.response.data)
    })
  }
}
export const checkTaskApi = (taskName) => {
  return dispatch => {
    let promise = axios({
      url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
      method: 'PUT'
    });

    promise.then(res => {
      dispatch(getTaskListApi())
    });

    promise.catch(err => {
      alert(err.response.data);
    })
  }
}


export const rejectTaskApi = (taskName) => {
  return dispatch => {
    let promise = axios({
      url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
      method: 'PUT'
    });

    promise.then(res => {
      alert(res.data);
      dispatch(getTaskListApi());
    });

    promise.catch(err => {
      alert(err.response.data);
    })
  }
}
export const CyberBugs_login = (data) => ({
  type: CYBERBUGS_LOGIN,
  userLogin: {
    email: data.values.email,
    password: data.values.password
  }
})