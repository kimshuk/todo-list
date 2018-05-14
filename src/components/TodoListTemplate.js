import React from "react";
import "./TodoListTemplate.css";
import "./Palette";

const TodoListTemplate = ({ form, children }) => {
  return (
    <main className="todo-list-template">
      <div className="title">Today's todo</div>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default TodoListTemplate;
