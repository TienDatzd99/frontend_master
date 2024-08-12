import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoadingComponent from './components/GlobalSetting/LoadingComponent/LoadingComponent';
import Header from './components/Home/Header/Header';
import Modal from './HOC/Modal/Modal';
import About from './pages/About/About';
// import BaiTapToDoListSaga from './pages/BaiTapToDoListSaga/BaiTapToDoListSaga';
import Contact from './pages/Contact/Contact';
import DemoHOCModal from './pages/DemoHOCModal/DemoHOCModal';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

import Profile from './pages/Profile/Profile';
import Todolist from './pages/Todolist/Todolist';
import ToDoListRedux from './pages/Todolist/TodoListRedux';
import TodolistRFC from './pages/Todolist/TodolistRFC';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import PageNOtFound from './pages/PageNotFound/PageNotFound';
import UserLoginTemplate from './templates/HomeTemplate/UserLoginTemplate';
import LoginCyberBug from './pages/CyberBugs/LoginCyberBug/LoginCyberBug';
import  { CyberbugsTemplate } from './templates/HomeTemplate/CyberbugsTemplate';
import indexCyberBugs from './redux/sagas/Cyberbugs/indexCyberBugs';
import CreateProject from './pages/CyberBugs/CreateProject/CreateProject'
import ProjectManagement from './pages/CyberBugs/ProjectManagement.js/ProjectManagement';
import DrawerCyberBugs from './HOC/CyberbugsHOC/DrawerCyberBugs';
import Notification from './components/Notification/Notification';

function App() {
  
  return (
    <Router >
    <DrawerCyberBugs/>

      <Modal />
      <Routes>
        <Route path="/home" element={<HomeTemplate Component={Home} />} />
        <Route path='/contact' element={<HomeTemplate Component={Contact} />} />
        <Route path='/about' element={<HomeTemplate Component={About} />} />
        <Route path='/login' element={<UserLoginTemplate Component={LoginCyberBug} />} />
        <Route path='/detail/:id' element={<HomeTemplate Component={Detail} />} />
        <Route path='/profile' element={<HomeTemplate Component={Profile} />} />
        <Route path='/todolistrfc' element={<HomeTemplate Component={TodolistRFC} />} />
        <Route path='/cyberbugs' element={<CyberbugsTemplate Component={indexCyberBugs} />} />
        <Route path='/todolist' element={<HomeTemplate Component={Todolist} />} />
        <Route path='/todolistredux' element={<HomeTemplate Component={ToDoListRedux} />} />
       
        <Route path='/createproject' element={<CyberbugsTemplate Component={CreateProject} />} />
        <Route path='/projectmanagement' element={<CyberbugsTemplate Component={ProjectManagement} />} />
        <Route path='/demohocmodal' element={<HomeTemplate Component={DemoHOCModal} />} />
        <Route path='/' element={<HomeTemplate Component={Home} />} />
        <Route path="*" element={<HomeTemplate Component={PageNOtFound} />} />
      </Routes>
    </Router>
  );
}

export default App;
