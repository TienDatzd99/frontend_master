import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Home/Header/Header';

export const HomeTemplate = ({ Component }) => {
  return (
    <>
      <Header/>
      <Component />
      <Outlet />
    </>
  );
};
