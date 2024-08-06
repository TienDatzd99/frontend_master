import React, { Component } from 'react';
import Axios from 'axios';
import style from './Todolist.css';

export default class Todolist extends Component {
    state = {
        taskList: [],
        values: {
            taskName: ''
        },
        errors: {
            taskName: ''
        }
    }

    getTaskList = () => {
        let promise = Axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'GET'
        });

        promise.then((result) => {
            console.log(result.data);
            this.setState({
                taskList: result.data
            });
            console.log('thành công');
        });

        promise.catch((err) => {
            console.log('thất bại');
            console.log(err.response.data);
        });
    }


    renderTaskToDo = () => {
        return this.state.taskList.filter(item => !item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button className="remove" type='button' onClick={() => {
                        this.deleteTask(item.taskName)
                    }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button className="complete" type='button' onClick={() => {
                        this.checkTask(item.taskName)
                    }}>
                        <i className="far fa-check-circle" />
                        <i className="fas fa-check-circle" />
                    </button>
                </div>
            </li>
        });
    }

    renderTaskToDoDone = () => {
        return this.state.taskList.filter(item => item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button className="remove" type='button' onClick={() => {
                        this.deleteTask(item.taskName)
                    }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button className="complete" onClick={()=>{
                        this.rejectTask(item.taskName)
                    }}>
                        <i className="far fa-check-circle" />
                        <i className="fas fa-check-circle" />
                    </button>
                </div>
            </li>
        });
    }

    componentDidMount() {
        this.getTaskList();
    }

    deleteTask = (item) => {

        let promise = Axios({
            url: `https://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${item}`,
            method: 'DELETE',

        });
        promise.then(result => {
            this.getTaskList();
            console.log(result)
        })
        promise.catch(errors => {
            alert(errors.response.data)
        })
    }
    checkTask = (taskName) => {
        let promise = Axios({
            url: `https://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method: 'PUT'
        });
        promise.then(() => {
            this.getTaskList()
        })


    }

    addTask = (e) => {
        e.preventDefault();
        let promise = Axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
            method: 'POST',
            data: { taskName: this.state.values.taskName }
        });
        promise.then(result => {
            this.getTaskList();
            console.log(result)
        })
        promise.catch(errors => {
            alert(errors.response.data)
        })

    }
    rejectTask = (taskName) => {
        let promise = Axios({
            url: `https://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method: 'PUT'
        });
        promise.then(() => {
            this.getTaskList()
        })
    }

    handleChange = (e) => {
        console.log(e.target);
        let { value, name } = e.target;
        console.log(value, name);
        let newValues = { ...this.state.values };
        newValues = { ...newValues, [name]: value }
        console.log([name], value)
        let newErrors = { ...this.state.errors };
        let regexString = /^[a-z A-Z]+$/;
        if (!regexString.test(value) || value.trim() === "") {
            newErrors[name] = name + ' invalid !';
        } else {
            newErrors[name] = ""
        }
        this.setState({
            ...this.state,
            values: newValues, // Corrected from value to values
            errors: newErrors
        });
    }

    render() {
        return (
            // <form onClick={this.addTask}>
            <div>
                <div className="card">
                    <div className="card__header">
                        <img src={require('./bg.png')} />
                    </div>
                    <div className="card__body">
                        <div className="card__content">
                            <div className="card__title">
                                <h2>My Tasks</h2>
                                <p>September 9,2020</p>
                            </div>
                            <div className="card__add">
                                <input name='taskName' id="newTask" type="text" onChange={this.handleChange} placeholder="Enter an activity..." />
                                <button id="addItem" onClick={this.addTask}>
                                    <i className="fa fa-plus" />
                                </button>
                            </div>
                            <p className='text text-danger'>{this.state.errors.taskName}</p>
                            <div className="card__todo">
                                <ul className="todo" id="todo">
                                    {this.renderTaskToDo()}
                                </ul>
                                <ul className="todo" id="completed">
                                    {this.renderTaskToDoDone()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // </form>
        )
    }
}