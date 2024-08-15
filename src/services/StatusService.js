import React, { Component } from 'react'
import { baseService } from './baseService'

 class StatusService extends baseService {

    constructor() {
        super();
    }

    getAllStatus = ()=>{
        return this.get('Status/getAll')
    }


}
export const statusservice = new StatusService()
