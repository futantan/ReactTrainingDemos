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
        todo
      </div>
    );
  }
}

export default App;
