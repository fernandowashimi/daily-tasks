import React, { Component } from "react";
import Task from "../../components/Task";
import Modal from "../../components/Modal";
import { FiPlus } from "react-icons/fi";
import "./style.css";

export default class Main extends Component {
  state = {
    isShowing: false,
    taskList: [],
    completedTaskList: []
  };

  componentDidMount = () => {
    this.sortTasks();
  };

  sortTasks = () => {
    let list = this.state.taskList;
    list.sort(function(a, b) {
      const x = parseInt(a.hour.replace(":", ""));
      const y = parseInt(b.hour.replace(":", ""));
      return x - y;
    });

    let completedList = this.state.completedTaskList;
    completedList.sort(function(a, b) {
      const x = parseInt(a.hour.replace(":", ""));
      const y = parseInt(b.hour.replace(":", ""));
      return x - y;
    });

    this.setState({ taskList: list });
    this.setState({ completedTaskList: completedList });
  };

  addTask = task => {
    let list = this.state.taskList;
    list.push(task);
    this.setState({ taskList: list });
  };

  removeTask = index => {
    let list = this.state.taskList;
    list.splice(index, 1);
    this.setState({ taskList: list });
  };

  editTask = (index, hour, task) => {
    let list = this.state.taskList;
    list[index] = { hour, task };
    this.setState({ taskList: list });
  };

  completeTask = index => {
    let task = this.state.taskList[index];
    this.removeTask(index);
    let completedTaskList = this.state.completedTaskList;
    completedTaskList.push(task);
    this.setState({ completedTaskList });
    this.sortTasks();
  };

  uncompleteTask = index => {
    let task = this.state.completedTaskList[index];
    let completedTaskList = this.state.completedTaskList;
    completedTaskList.splice(index, 1);
    this.setState({ completedTaskList });
    this.addTask(task);
    this.sortTasks();
  };

  openModalHandler = (type, index) => {
    this.setState({
      isShowing: true,
      modalType: type,
      taskIndex: index
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  render() {
    return (
      <div id="main-container">
        <div id="task-container">
          {this.state.taskList.length === 0 ? (
            <div id="alert-container">
              <p>Nenhuma tarefa encontrada</p>
            </div>
          ) : (
            this.state.taskList.map((item, key) => {
              return (
                <Task
                  key={key}
                  info={{ hour: item.hour, task: item.task, index: key }}
                  remove={this.removeTask}
                  open={() => this.openModalHandler("edit", key)}
                  complete={this.completeTask}
                />
              );
            })
          )}
        </div>
        <div id="button-container">
          <button
            title="Criar nova tarefa"
            onClick={() => this.openModalHandler("create")}
          >
            <FiPlus size="20px" />
          </button>
        </div>

        <div id="completed-task-container">
          {this.state.completedTaskList.map((item, key) => {
            return (
              <Task
                key={key}
                info={{ hour: item.hour, task: item.task, index: key }}
                uncomplete={this.uncompleteTask}
                completed={true}
              />
            );
          })}
        </div>

        {this.state.isShowing ? <div id="modal-background" /> : null}
        <Modal
          show={this.state.isShowing}
          close={this.closeModalHandler}
          create={this.addTask}
          edit={this.editTask}
          sort={this.sortTasks}
          type={this.state.modalType}
          index={this.state.taskIndex}
        />
      </div>
    );
  }
}
