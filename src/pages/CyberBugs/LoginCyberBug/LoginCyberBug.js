import React from 'react'
import { UserOutlined, LockOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CyberBugs_login } from '../../../redux/action/ToDoListAction';
import { type } from '@testing-library/user-event/dist/type';
import { USER_SIGNIN_API } from '../../../redux/type/CyberBugs/CyberBugs';
 import { signinCyberbugsAction } from '../../../redux/action/CyberBugsAction';
import { useNavigate } from 'react-router-dom';
 function LoginCyberBug(props) {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
    return (
        <form onSubmit={handleSubmit} className="container" style={{ height: window.innerHeight }} >
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: window.innerHeight }} >
            <h3 className="text-center" style={{fontWeight:300,fontSize:35}}>Login CyberBugs</h3>

            <div className=" mt-3" >
                <Input onChange={handleChange} style={{ width: '100%', minWidth: 300 }} name="email" size="large" placeholder="email" prefix={<UserOutlined />} />
            </div>
            <div className='text-danger'>{errors.email}</div>
            <div className=" mt-3">
                <Input onChange={handleChange}  style={{ width: '100%', minWidth: 300 }}  name="password" size="large" placeholder="password" prefix={<LockOutlined />} />
            </div>
            <div className='text-danger'>{errors.password}</div>

            <Button htmlType="submit" size="large" style={{ minWidth: 300, backgroundColor: 'rgb(102,117,223)', color: '#fff' }} className="mt-5">Login</Button>


            <div className="social mt-3 ">
                <Button style={{backgroundColor:'rgb(59,89,152)'}}  shape="circle" size={"large"}>
                    <span className="font-weight-bold" style={{color:'#fff'}} >F</span>
                </Button>
                <Button type="primary ml-3" shape="circle" icon={<TwitterOutlined />} size={"large"}>

                </Button>
            </div>
        </div>

    </form>
    )
}
const LoginCyberBugsWithFormik =  withFormik({
    mapPropsToValues: () => ({ 
        email: '',
        password: '' 
    }),
    validationSchema: Yup.object().shape({
        email:Yup.string().required('Email is required!').email('email is invalid!'),
        password:Yup.string().min(6,'password must have min 6 characters').max(32,'password  have max 32 characters')
    }),
    handleSubmit: (values, {props, setSubmitting }) => {
    
        if (values.email && values.password) {
        
         props.dispatch(signinCyberbugsAction(values.email,values.password))
        } else {
            console.error("Giá trị form không được định nghĩa đúng:", values);
        }
    
    },
  
    displayName: 'Login CyberBugs',
  })(LoginCyberBug);


export default connect ()(LoginCyberBugsWithFormik)
