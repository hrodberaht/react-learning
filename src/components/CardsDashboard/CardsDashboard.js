import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import ConnectedSearch from './Search/Search';
import ConnectedShowAddCard from './ShowAddCard/ShowAddCard';
import ConnectedAllCards from './AllCards/AllCards';
import ConnectedAuthorization from '../Header/NavBar/Authorization/Authorization';

export default class CardsDashboard extends Component {
  render() {
    return (
      <ConnectedAuthorization
        withAuth={() => (
          <React.Fragment>
            <ConnectedShowAddCard />
            <ConnectedSearch />
            <ConnectedAllCards />
          </React.Fragment>
        )}
        withoutAuth={(
          <Redirect to="/login" />
        )}
      />
    );
  }
}
