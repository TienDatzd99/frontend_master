const initialState = {
  projectEditList: {
    "id": 1,
    "projectName": "string",
    "creator": 0,
    "description": "<h1>dsfsdff</h1>",
    "categoryId": 2,
  },
  projectDetail: {
    
  }
}

export const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_PROJECT': {
      return { 
        ...state,
        projectEditList: action.projectEditModel
      }
    }
    case 'PUT_PROJECT_DETAIL': {
      return {
        ...state,
        projectDetail: action.projectDetail
      }
    }
    default:
      return state;
  }
}