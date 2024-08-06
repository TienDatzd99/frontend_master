import React from 'react'
import { Navigate  } from 'react-router-dom'
export default function Profile() {
    if (localStorage.getItem('userLogin')) {
        return (
            <div>Profile</div>
        )
    }else{
        alert('vui long dang nhap de vao trang nay')
        return <Navigate  to='/login' />
    }
}
