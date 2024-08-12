// indexCyberBugs.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderMain from '../../../components/Cyberbugs/Main/HeaderMain';
import InfoMain from '../../../components/Cyberbugs/Main/InfoMain';
import ContentMain from '../../../components/Cyberbugs/Main/ContentMain';
import { useSelector, useDispatch } from 'react-redux';

export default function IndexCyberBugs() {
  const {projectDetail} = useSelector(state => state.ProjectReducer);
  const dispatch = useDispatch();
  const { id: projectId } = useParams();




  useEffect(() => {
    console.log('projectDetail', projectDetail);
    dispatch({
      type: 'GET_PROJECT_DETAIL',
      projectId
    });
  },[]);

  return (
    <div className="main">
      <HeaderMain projectDetail={projectDetail} />
      <InfoMain projectDetail={projectDetail} />
      <ContentMain />
    </div>
  );
}