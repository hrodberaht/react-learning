import React, { Component } from 'react';
import './App.css';

import { ConnectedSearch } from './components/Search/Search';
import { ConnectedShowAddCard } from './components/ShowAddCard/ShowAddCard';
import { ConnectedAllCards } from './components/AllCards/AllCards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedShowAddCard />
        <ConnectedSearch />
        <ConnectedAllCards />
      </div>
    );
  }
}

export default App;
