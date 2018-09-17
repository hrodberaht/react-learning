import React, { Component } from 'react';
import './App.css';

import Card from './components/Card/Card';

class App extends Component {
  state = {
    cards: [
      {
        name: 'John',
        email: 'john@gmail.com'
      },
      {
        name: 'Rob',
        email: 'rob@gmail.com'
      }
    ]
  }
  
  render() {
    return (
      <div className="App">
        <Card name={'John'}>Card 1</Card>
        <Card name={'Rob'}>Card 2</Card>
      </div>
    );
  }
}

export default App;
