import React, { Component } from "react";
import "./App.css";
import TextFieldSubmit from "./components/TextFieldSubmit";
import List from "./components/List";
import FilterContainer from "./containers/FilterContainer";

class App extends Component {
  state = {
    filter: 'all',
    todos: [],
  };

  handleAddTodoItem = (content) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({ content, status: 'active' })
    });
  };

  handleToggleTodo = (index) => {
    const targetTodo = this.state.todos[index];
    const toggledStatus = (targetTodo.status === 'active' ? 'completed' : 'active');

    this.setState({
      ...this.state,
      todos: [
        ...this.state.todos.slice(0, index),
        { ...targetTodo, status: toggledStatus },
        ...this.state.todos.slice(index + 1)
      ],
    });
  };

  todosWithCondition = (condition) => {
    return this.state.todos
      .filter((item) => (condition === 'all') ? true : item.status === condition);
  };

  render() {
    return (
      <div>
        <TextFieldSubmit handleSubmit={this.handleAddTodoItem}/>

        <List
          items={this.todosWithCondition(this.state.filter)}
          clickItem={this.handleToggleTodo}
        />

        <FilterContainer
          onFilterConditionChange={ (condition) => this.setState({ filter: condition })}
        />
      </div>
    );
  }
}

export default App;
