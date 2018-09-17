import React, { Component } from 'react';
import './App.css';

import Card from './components/Card/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card>Card 1</Card>
        <Card>Card 2</Card>
      </div>
    );
  }
}

export default App;
