import React, { Component } from "react";
import Task from "../../components/Task";
import { FiPlus } from "react-icons/fi";
import "./style.css";

export default class Main extends Component {
  render() {
    return (
      <div>
        <div id="task-container">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
        <div id="button-container">
          <button>
            <FiPlus size="20px" />
          </button>
        </div>
      </div>
    );
  }
}
