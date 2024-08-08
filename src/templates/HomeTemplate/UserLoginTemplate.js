import React, { useEffect, useState } from 'react'
import { Button,Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const UserLoginTemplate = ({Component}) => {
  const [{width,height},setSize] =useState({width:window.innerWidth,height:window.innerHeight})

useEffect(()=>{
  window.onresize = ()=>{
    setSize({
      width:window.innerWidth,
      height:window.innerHeight
    })
  }
},[])

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