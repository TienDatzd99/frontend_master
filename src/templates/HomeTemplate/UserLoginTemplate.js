import React from 'react'
import { Button,Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const UserLoginTemplate = ({Component}) => {

  return (
    <Layout>
    <Sider width={window.innerWidth/2} style={{height:window.innerHeight,backgroundImage:'url(https://picsum.photos/2000)'}}>
      
    </Sider>
    <Content>
        <Component />
    </Content>
</Layout>
  )
}

export default UserLoginTemplate