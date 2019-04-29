import React, { Component } from "react";
import { FiCheckSquare, FiEdit2, FiTrash2 } from "react-icons/fi";

import "./style.css";

export default class Task extends Component {
  render() {
    return (
      <div className="task">
        <div>
          <p>Tarefa</p>
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
