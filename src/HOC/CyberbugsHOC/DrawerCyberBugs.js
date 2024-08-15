import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';


const { Option } = Select;
const App = () => {
  const {isOpen,title,ComponentContentDrawer,callBackSubmit} = useSelector(state => state.DrawerCyberbugsReducer);

  const dispatch = useDispatch();
 
  const onClose = () => {
    dispatch({ type: 'CLOSE_DRAWER' });
  };
  return (
    <>
      
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={isOpen}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={callBackSubmit} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
       {ComponentContentDrawer}
      </Drawer>
    </>
  );
};
export default App;