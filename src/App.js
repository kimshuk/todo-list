import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import Palette from "./components/Palette";

const colors = ["#343a40", "#f03e3e", "#12b886", "#228ae6"];

class App extends Component {
  id = 3;

  state = {
    input: "",
    todos: [
      { id: 0, text: " intro do react", checked: false },
      { id: 1, text: " meeting with react", checked: true },
      { id: 2, text: " summarize everything", checked: false }
    ],
    color: "#343a40"
  };

  handleChange = e => {
    this.setState({
      input: e.target.value // input's next value
    });
  };

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: "", // empty input
      // concat to add to array
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color
      })
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = id => {
    const { todos } = this.state;

    // using id from param to find the order of item
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // selected obj

    const nextTodos = [...todos];

    console.log(nextTodos[index], " nextTodos[i]");

    // copy prev values and overwrite checked state
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  };

  handleRemove = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  handleSelectColor = color => {
    this.setState({
      color
    });
  };

  render() {
    console.log("this state: ", this.state);

    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this; // shortens this.method
    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
            color={color}
          />
        }
        palette={
          <Palette
            colors={colors}
            selected={color}
            onSelect={handleSelectColor}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
