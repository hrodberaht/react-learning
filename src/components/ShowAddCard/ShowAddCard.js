import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './AddCard.css';
import { ConnectedAddCardForm } from './AddCardForm/AddCardForm';
import { toggleCardVisable } from '../../actions';

const mapStateToProps = state => ({
  isAddCardVisible: state.isAddCardVisible,
});

class ShowAddCard extends Component {
  render() {
    const { handleClick, isAddCardVisible } = this.props;

    return (
      <div>
        <button type="button" onClick={handleClick}>
          {isAddCardVisible ? 'Hide' : 'Add Card'}
        </button>
        {isAddCardVisible && <ConnectedAddCardForm />}
      </div>
    );
  }
}

ShowAddCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isAddCardVisible: PropTypes.bool.isRequired,
};

export { ShowAddCard };
export const ConnectedShowAddCard = connect(
  mapStateToProps,
  { handleClick: toggleCardVisable },
)(ShowAddCard);
