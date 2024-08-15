import React, { Component, useEffect, useRef, useState } from 'react'
import { Table, Tag, Space, Button, Avatar, AutoComplete } from 'antd';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons'
import parse from 'html-react-parser';
import { message, Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PROJECT_LIST_SAGA } from '../../../redux/type/CyberBugs/CyberBugs';
import FormEditProject from '../Form/FormEditProject/FormEditProject';
import { render } from '@testing-library/react';
import { ConfigProvider, Popover } from 'antd';
import { NavLink } from 'react-router-dom';



const confirm = (e) => {
    console.log(e);
    message.success('Click on Yes');
};
const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
};

export default function ProjectManagement(props) {

const [value,setValue] = useState('')

    const projectList = useSelector(state => state.ProjectCyberBugsReducer.projectList)

    const { userSearch } = useSelector(state => state.UserLoginCyberBugsReducer)

    const dispatch = useDispatch();

    const searchRef = useRef(null);

    const [state, setState] = useState({
        filteredInfo: null,
        sortedInfo: null,
    });
    useEffect(() => {

        dispatch({ type: GET_PROJECT_LIST_SAGA })
    }, [])


    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    const clearFilters = () => {
        setState({ filteredInfo: null });
    };

    const clearAll = () => {
        setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    };

    const setAgeSort = () => {
        setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        });
    };

    let { sortedInfo, filteredInfo } = state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};



    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
            sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
            ellipsis: true,

        },
        {
            title: 'projectName',
            dataIndex: 'projectName',
            key: 'projectName',
            render: (text, record, index) => {
                return <NavLink to={`/projectdetail/${record.id}`}>{text} </NavLink>
            },
            sorter: (a, b) => a.projectName.length - b.projectName.length,
            sortOrder: sortedInfo.columnKey === 'projectName' && sortedInfo.order,
            ellipsis: true,
        },
        // {
        //     title: 'description',
        //     dataIndex: 'description',
        //     key: 'description',
        //     render: (text, record, index) => {
        //         let contentJSX = parse(text);

        //         return <div>
        //             {contentJSX}
        //         </div>
        //     }
        // },
        {
            title: 'category',
            dataIndex: 'categoryName',
            key: 'categoryName',
            sorter: (a, b) => a.categoryName.length - b.categoryName.length,
            sortOrder: sortedInfo.columnKey === 'categoryName' && sortedInfo.order,
            ellipsis: true,
        },
        {
            title: 'creator',
            // dataIndex: 'creator',
            key: 'creator',
            render: (text, record, index) => {
                return <Tag color="green">{record.creator?.name}</Tag>
            },
        },
        {
            title: 'members',
            key: 'members',
            render: (text, record, index) => {
                return <div>
                    {record.members?.slice(0, 3).map((member, index) => {
                        return <Avatar key={index} src={member.avatar} />
                    })}

                    {record.members?.length > 3 ? <Avatar>...</Avatar> : ''}

                    <Popover placement="rightTop" title={"Add user"} content={() => {
                        return <AutoComplete

                            options={userSearch?.map((user, index) => {
                                return { label: user.name, value: user.userId.toString() }
                            })}
                            value ={value}
                            onChange={(text)=>{
                                setValue(text)
                            }}


                            onSelect={(valueSeclect, option) => {
                               setValue(option.label)

                               dispatch({
                                type:'ADD_USER_PROJECT_API',
                                userProject:{
                                    "projectId": record.id,
                                    "userId": valueSeclect
                                }
                               })

                            }}
                            style={{ width: '100%' }} onSearch={(value) => {
                                if( searchRef.current){
                                    clearTimeout(searchRef.current)
                                }

                                searchRef.current = setTimeout(()=>{
                                    dispatch({
                                        type: 'GET_USER_API',
                                        keyWord: value
                                    })
                                },2000)
                              

                            }} />
                    }} trigger="click">
                        <Button style={{ borderRadius: '50%' }}>+</Button>
                    </Popover>
                </div>

            },
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record, index) => {
                return <div>
                    <button onClick={() => {
                        const action = {
                            type: 'OPEN_FORM_EDIT_PROJECT',
                            title:'Edit Project',
                            Component: <FormEditProject />,


                        }
                        dispatch(action)

                        
                        const actionEditProject = {
                            type: 'EDIT_PROJECT',
                            projectEditModel: record

                        }

                        dispatch(actionEditProject)
                    }} className="btn mr-2 btn-primary">
                        <FormOutlined style={{ fontSize: 17 }} />
                    </button>
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => {
                            dispatch({
                                type: 'DELETE_PROJECT_SAGA',
                                idProject: record.id
                            });
                        }}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <button className="btn btn-danger">
                            <DeleteOutlined style={{ fontSize: 17 }} />
                        </button>
                    </Popconfirm>

                </div>
            },
        }

    ];
    return (
        <div className="container-fluid mt-5">
            <h3>Project management</h3>
            <Space style={{ marginBottom: 16 }}>
                <Button onClick={setAgeSort}>Sort age</Button>
                <Button onClick={clearFilters}>Clear filters</Button>
                <Button onClick={clearAll}>Clear filters and sorters</Button>
            </Space>
            <Table columns={columns} rowKey={"id"} dataSource={projectList} onChange={handleChange} />
        </div>
    )
}
