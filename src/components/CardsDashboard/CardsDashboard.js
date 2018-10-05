import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ConnectedSearch } from './Search/Search';
import { ConnectedShowAddCard } from './ShowAddCard/ShowAddCard';
import { ConnectedAllCards } from './AllCards/AllCards';

export class CardsDashboard extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div>
        {auth
          ? (
            <div>
              <ConnectedShowAddCard />
              <ConnectedSearch />
              <ConnectedAllCards />
            </div>
          )
          : <Redirect to="/login" />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export const ConnectedCardsDashboard = connect(mapStateToProps)(CardsDashboard);

CardsDashboard.propTypes = {
  auth: PropTypes.bool.isRequired,
};
