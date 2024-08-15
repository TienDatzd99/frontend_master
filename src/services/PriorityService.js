import React, { Component } from 'react'
import { baseService } from './baseService'

export default class PriorityService extends baseService {

    constructor() {
        super();
    }

    getAllPriority = ()=>{
        return this.get('Priority/getAll')
    }


}
export const priorityservice = new PriorityService()