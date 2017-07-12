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

class App extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text"/>
          <button type="submit">Add Todo</button>
        </form>

        <ul>
          <li>foo</li>
          <li>bar</li>
        </ul>

        <div>
          <span>Show:</span>
          <a href="">All</a>
          <a href="">Active</a>
          <a href="">Completed</a>
        </div>
      </div>
    );
  }
}

export default App;
