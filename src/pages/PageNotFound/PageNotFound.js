import React from 'react'
import {  useLocation  } from 'react-router-dom';

export default function PageNOtFound() {
    const location = useLocation() 
  return (
    <div>Không tìm thấy trang {location.pathname}</div>
  )
}
