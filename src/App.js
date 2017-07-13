import React, { Component } from 'react';
import './App.css'


class TextFieldSubmit extends React.Component {
  state = {
    value: ''
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={(evt) => {
            this.setState({ value: evt.target.value });
          }}
        />
        <button
          type="submit"
          onClick={(evt) => {
            evt.preventDefault();
            this.props.addTodoItem(this.state.value);
            this.setState({value: ''});
          }}
        >
          Add Todo
        </button>
      </form>
    )
  }
}

const List = (props) => (
  <ul>
    {
      props.items.map((item, index) => <Item
        className={item.status === 'completed' ? 'cross-line' : ''}
        key={index}
        content={item.content}/>
      )
    }
  </ul>
);

const Item = (props) => (
  <li className={props.className}>{props.content}</li>
);

class FilterContainer extends React.Component {
  render() {
    return (
      <Filter
        title="Show:"
        filters={[
          { msg: 'All', condition: 'all' },
          { msg: 'Active', condition: 'active' },
          { msg: 'Completed', condition: 'completed' },
        ]}
        onFilterClick={(evt, condition) => {
          evt.preventDefault();
          this.props.onFilterConditionChange(condition);
        }}
      />
    )
  }
}

const Filter = (props) => {
  return (
    <div>
      <span>{props.title}</span>
      {
        props.filters.map((filter, index) => (
          <a
            key={index}
            href="#"
            onClick={(evt) => props.onFilterClick(evt, filter.condition)}
          >
            {filter.msg}
          </a>
        ))
      }
    </div>
  )
};

class App extends Component {
  state = {
    filter: 'all',
    todos: [],
  };

  render() {
    return (
      <div>
        <TextFieldSubmit addTodoItem={(content) => {
          this.setState({
            ...this.state,
            todos: this.state.todos.concat({content, status: 'active'})
          });
        }}/>
        <List
          items={
            this.state.todos.filter((item) => (this.state.filter === 'all') ? true : item.status === this.state.filter)
          }
        />
        <FilterContainer
          onFilterConditionChange={ (condition) => this.setState({ filter: condition })}
        />
      </div>
    );
  }
}

export default App;
