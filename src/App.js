import React, { Component } from 'react';

const fakeData = {
  items: [
    { content: 'hello', status: 'completed' },
    { content: 'world', status: 'active' },
    { content: 'how', status: 'active' },
    { content: 'are', status: 'active' },
    { content: 'you', status: 'active' },
  ],
  filter: 'all',
};

const TextFieldSubmit = (props) => (
  <form>
    <input type="text"/>
    <button type="submit">Add Todo</button>
  </form>
);

const List = (props) => (
  <ul>
    {props.items.map((item) => <Item content={item.content}/>)}
  </ul>
);

const Item = (props) => (
  <li>{props.content}</li>
);

const Filter = (props) => (
  <div>
    <span>Show:</span>
    <a href="">All</a>
    <a href="">Active</a>
    <a href="">Completed</a>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <TextFieldSubmit/>
        <List items={fakeData.items}/>
        <Filter/>
      </div>
    );
  }
}

export default App;
