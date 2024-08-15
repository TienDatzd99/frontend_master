import React, { Component } from 'react'
import { baseService } from './baseService'

 class TaskService extends baseService {

    constructor() {
        super();
    }

    creatTask = (TaskObject)=>{
        return this.post('Project/createTask',TaskObject)
    }


}
export const taskservice = new TaskService()
