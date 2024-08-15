import React, { Component } from 'react'
import { baseService } from './baseService'

 class TaskTypeService extends baseService {

    constructor() {
        super();
    }

    getAllTasktype = ()=>{
        return this.get('TaskType/getAll')
    }


}
export const tasktypeservice = new TaskTypeService()
