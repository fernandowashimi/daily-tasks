import React, { Component } from "react";
import Task from "../../components/Task";
import Modal from "../../components/Modal";
import { FiPlus } from "react-icons/fi";
import "./style.css";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      isShowing: false,
      taskList: [{ task: "TEste", hour: "12:30" }]
    };
  }

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
    this.setState({ taskList: list });
  };

  addTask = (hour, task) => {
    let list = this.state.taskList;
    list.push({ hour, task });
    this.setState({ taskList: list });
  };

  removeTask = index => {
    let list = this.state.taskList;
    list.splice(index, 1);
    this.setState({ taskList: list });
  };

  openModalHandler = () => {
    this.setState({
      isShowing: true
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
                />
              );
            })
          )}
        </div>
        <div id="button-container">
          <button onClick={this.openModalHandler}>
            <FiPlus size="20px" />
          </button>
        </div>

        {this.state.isShowing ? <div id="modal-background" /> : null}
        <Modal
          show={this.state.isShowing}
          close={this.closeModalHandler}
          create={this.addTask}
          sort={this.sortTasks}
        />
      </div>
    );
  }
}
