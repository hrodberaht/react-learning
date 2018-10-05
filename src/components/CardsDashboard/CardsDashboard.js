import React, { Component } from 'react';

import { ConnectedSearch } from './Search/Search';
import { ConnectedShowAddCard } from './ShowAddCard/ShowAddCard';
import { ConnectedAllCards } from './AllCards/AllCards';

export default class CardsDashboard extends Component {
  render() {
    return (
      <div>
        <ConnectedShowAddCard />
        <ConnectedSearch />
        <ConnectedAllCards />
      </div>
    );
  }
}
