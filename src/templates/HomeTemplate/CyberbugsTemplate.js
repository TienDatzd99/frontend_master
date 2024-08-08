import React, { useEffect, useState } from 'react'
import { Button, Layout } from 'antd';
import SidebarCyberbugs from '../../components/Cyberbugs/SlidebarCyberbugs';
import MenuCyberbugs from '../../components/Cyberbugs/MenuCyberBugs';
import ModalCyberBugs from '../../components/Cyberbugs/Main/ModalCyberBugs.js/ModalCyberBugs';
const { Header, Footer, Sider, Content } = Layout;




const CyberbugsTemplate = ({ Component }) => {




  return (


    <Layout >
      <div className="jira">
        <SidebarCyberbugs />
        <MenuCyberbugs />
        <Component />
        <ModalCyberBugs />
      </div>
    </Layout>
  )
}

export { CyberbugsTemplate };