import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ConnectedSearch } from './Search/Search';
import { ConnectedShowAddCard } from './ShowAddCard/ShowAddCard';
import { ConnectedAllCards } from './AllCards/AllCards';

export class CardsDashboard extends Component {
  renderResult = () => {
    const { auth } = this.props;
    if (auth) {
      return (
        <React.Fragment>
          <ConnectedShowAddCard />
          <ConnectedSearch />
          <ConnectedAllCards />
        </React.Fragment>
      );
    }
    return <Redirect to="/login" />;
  }

  render() {
    return (
      <div>
        {this.renderResult()}
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
