// src/redux/reducers/DrawerCyberbugsReducer.js
import React from "react";
const initialState = {
    isOpen: false,
    title:'',
    ComponentContentDrawer: <div>Default</div>,
    callBackSubmit: (propsValue) => {
        alert('click demo!')
    }
}

export const DrawerCyberbugsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_DRAWER':
            return {
                ...state,
                isOpen: true,

            };
        case 'CLOSE_DRAWER':
            return {
                ...state,
                isOpen: false,

            };
        case 'OPEN_FORM_EDIT_PROJECT': {
         
            return {
                ...state,
                isOpen: true,
                ComponentContentDrawer: action.Component,
                title : action.title,


            }
        }

        case 'SET_SUBMIT_EDIT_PROJECT': {
            console.log(action)
            return {
                ...state,
                callBackSubmit: action.submitFunction
            }
        }
        case 'OPEN_FORM_CREATE_TASK':{
            return{...state,
                isOpen: true,
                title: action.title,
                ComponentContentDrawer: action.Component
            }
        }
        case 'SET_SUBMIT_CREATE_TASK': {
            console.log(action.submitFunction)
            return{...state,
                callBackSubmit: action.submitFunction
            }
        }

        default:
            return state;
    }
};