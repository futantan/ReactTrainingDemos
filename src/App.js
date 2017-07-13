import React, { Component } from 'react';
import './App.css'

const fakeData = {
  items: [
    { content: 'hello', status: 'completed' },
    { content: 'world', status: 'active' },
    { content: 'how', status: 'active' },
    { content: 'are', status: 'active' },
    { content: 'you', status: 'active' },
  ],
};

const TextFieldSubmit = (props) => (
  <form>
    <input type="text"/>
    <button type="submit">Add Todo</button>
  </form>
);

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
  };

  render() {
    return (
      <div>
        <TextFieldSubmit/>
        <List
          items={
            fakeData.items.filter((item) => (this.state.filter === 'all') ? true : item.status === this.state.filter)
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
