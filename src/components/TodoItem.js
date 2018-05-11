import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    <div className="todo-item" onClick={() => onToggle(id)}>
      <div
        className="remove"
        onClick={e => {
          e.stopPropagation(); // prevent onToggle trigger
          onRemove(id);
        }}
      >
        &times;
      </div>
      <div className={`todo-text ${checked && "checked"}`}>
        <div>{text}</div>
      </div>
      {checked && <div className="check-mark" />}
    </div>;
  }
}

export default TodoItem;
