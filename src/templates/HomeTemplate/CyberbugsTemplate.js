import React, { useEffect, useState } from 'react'
import { Button, Layout } from 'antd';
import SidebarCyberbugs from '../../components/Cyberbugs/SlidebarCyberbugs';
import MenuCyberbugs from '../../components/Cyberbugs/MenuCyberBugs';
import ModalCyberBugs from '../../components/Cyberbugs/Main/ModalCyberBugs.js/ModalCyberBugs';
const { Header, Footer, Sider, Content } = Layout;




const CyberbugsTemplate = ({ Component }) => {




  return (

    <div className="jira">
      <Layout><SidebarCyberbugs />
        <MenuCyberbugs />

        <Component />
      </Layout>
      <ModalCyberBugs />
    </div>

  )
}

export { CyberbugsTemplate };