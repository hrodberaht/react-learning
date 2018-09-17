import React, { Component } from 'react';
import './App.css';

import Card from './components/Card/Card';

class App extends Component {
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
