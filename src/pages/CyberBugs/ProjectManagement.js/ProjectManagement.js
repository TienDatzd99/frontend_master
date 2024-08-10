import React, { Component, useEffect, useState } from 'react'
import { Table, Tag, Space, Button } from 'antd';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons'
import parse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PROJECT_LIST_SAGA } from '../../../redux/type/CyberBugs/CyberBugs';
import FormEditProject from '../Form/FormEditProject/FormEditProject';






export default function ProjectManagement(props) {
    const projectList = useSelector(state => state.ProjectCyberBugsReducer.projectList)
    const dispatch = useDispatch();


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
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record, index) => {
                return <div>
                    <button onClick={()=>{
                       const action= {
                        type: 'OPEN_FORM_EDIT_PROJECT',
                        Component: <FormEditProject/>,
                        
                       }
                       dispatch(action)
                    }} className="btn mr-2 btn-primary">
                        <FormOutlined style={{ fontSize: 17 }} />
                    </button>
                    <button className="btn btn-danger">
                        <DeleteOutlined style={{ fontSize: 17 }} />
                    </button>
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
