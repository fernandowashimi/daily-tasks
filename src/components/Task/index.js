import React, { Component } from "react";
import {
  FiClock,
  FiClipboard,
  FiCheckSquare,
  FiEdit2,
  FiTrash2
} from "react-icons/fi";

import "./style.css";

export default class Task extends Component {
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
          <button id="button-check">
            <FiCheckSquare size="20px" />
          </button>
          <button id="button-edit">
            <FiEdit2 size="20px" />
          </button>
          <button id="button-remove">
            <FiTrash2 size="20px" />
          </button>
        </div>
      </div>
    );
  }
}
