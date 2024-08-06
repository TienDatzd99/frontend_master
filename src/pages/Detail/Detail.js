import React from 'react'
import { useParams, useLocation  } from 'react-router-dom';
export default function Detail() {
    const { id } = useParams();
    const location = useLocation();
  return (
    <div>
        Giá trị tham số: {id}
        Path name hiện tại: {location.pathname}
    </div>
  )
}
