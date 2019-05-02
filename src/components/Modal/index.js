import React, { Component } from "react";
import { FiClock, FiClipboard } from "react-icons/fi";
import "./style.css";

export default class Modal extends Component {
  state = {
    time: "",
    task: ""
  };

  closeModal = () => {
    this.setState({ time: "", task: "" });
    this.props.close();
  };

  createTask = e => {
    e.preventDefault();
    this.props.create(this.state.time, this.state.task);
    this.props.sort();
    this.setState({ time: "", task: "" });
    this.props.close();
  };

  editTask = e => {
    e.preventDefault();
    this.props.edit(this.props.index, this.state.time, this.state.task);
    this.setState({ time: "", task: "" });
    this.props.close();
  };

  handleTimeChange = e => {
    this.setState({ time: e.target.value });
  };

  handleTaskChange = e => {
    this.setState({ task: e.target.value });
  };

  render() {
    return (
      <div
        id="modal-wrapper"
        style={{
          transform: this.props.show ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: this.props.show ? "1" : "0"
        }}
      >
        <div id="modal-header">
          <h1>
            {this.props.type === "create"
              ? "Adicionar nova tarefa"
              : "Editar tarefa"}
          </h1>
          <hr />
        </div>
        <div id="modal-body">
          <div id="input-container">
            <form
              onSubmit={
                this.props.type === "create" ? this.createTask : this.editTask
              }
            >
              <div className="input-wrapper">
                <FiClock className="icon" />
                <input
                  type="time"
                  required
                  value={this.state.time}
                  onChange={this.handleTimeChange}
                />
              </div>
              <div className="input-wrapper">
                <FiClipboard className="icon" />
                <input
                  type="text"
                  maxLength="30"
                  required
                  value={this.state.task}
                  onChange={this.handleTaskChange}
                />
              </div>
              <button
                type="button"
                id="button-cancel"
                onClick={this.closeModal}
              >
                Cancelar
              </button>
              <button type="submit" id="button-create">
                {this.props.type === "create" ? "Criar" : "Editar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
