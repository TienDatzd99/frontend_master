import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';

export default function Login(props) {
    const navigate = useNavigate()
    console.log(props)
    const [userLogin, setUserLogin] = useState({ taikhoan: '', matkhau: '' })
    const handleChange = (event) => {
        const { name, value } = event.target
        setUserLogin({
            ...userLogin,
            [name]: value
        })
    }
    const handleLogin = (event) => {
        event.preventDefault()
        if(userLogin.taikhoan ==='cyberlearn' && userLogin.matkhau=== 'cyberlearn' ){
            navigate('/home');
            localStorage.setItem('userLogin',JSON.stringify(userLogin))
        }else{
            alert('sai tài khoản hoặc mật khẩu')
            return
        }
    }

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = 'bạn có muốn rời khỏi trang này';
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);
    return (
        <form className='container' onSubmit={handleLogin}>
            <div className='form-group'>
                <p>Tài khoản</p>
                <input name="taikhoan" className='form-control' onChange={handleChange} />
            </div>
            <div className='form-group'>
                <p>Mật khẩu</p>
                <input name="matkhau" className='form-control' onChange={handleChange} />
            </div>
            <div className='form-group'>
                <button className='btn btn-success'>Đăng nhập</button>
            </div>
            


        </form>
    )
}
