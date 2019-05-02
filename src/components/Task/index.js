import React, { Component } from "react";
import {
  FiClock,
  FiClipboard,
  FiCheckSquare,
  FiEdit2,
  FiTrash2,
  FiCheck,
  FiX
} from "react-icons/fi";

import "./style.css";

export default class Task extends Component {
  state = {
    isShowingDialog: false
  };

  openDialogHandler = () => {
    this.setState({ isShowingDialog: true });
  };

  closeDialogHandler = () => {
    this.setState({ isShowingDialog: false });
  };

  removeTask = index => {
    this.props.remove(index);
    this.setState({ isShowingDialog: false });
  };

  render() {
    return (
      <div className="task-wrapper">
        <div id="info-container">
          <div className="task-info">
            <FiClock size="13px" />
            <span>{this.props.info.hour}</span>
          </div>
          <div className="task-info">
            <FiClipboard size="13px" />
            <span>{this.props.info.task}</span>
          </div>
        </div>
        <div id="action-container">
          {this.state.isShowingDialog ? (
            <div>
              <button
                title="Confirmar"
                className="button-dialog"
                id="button-confirm"
                onClick={() => this.removeTask(this.props.info.index)}
              >
                <FiCheck size="20px" />
              </button>
              <button
                title="Cancelar"
                className="button-dialog"
                id="button-abort"
                onClick={this.closeDialogHandler}
              >
                <FiX size="20px" />
              </button>
            </div>
          ) : (
            <div>
              <button title="Concluir" id="button-check">
                <FiCheckSquare size="20px" />
              </button>
              <button title="Editar" id="button-edit" onClick={this.props.open}>
                <FiEdit2 size="20px" />
              </button>
              <button
                title="Remover"
                id="button-remove"
                onClick={this.openDialogHandler}
              >
                <FiTrash2 size="20px" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
