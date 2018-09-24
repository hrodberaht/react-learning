import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AddCard.css';
import AddCardForm from '../../containers/AddCardForm';

export default class ShowAddCard extends Component {
  render() {
    const { handleClick, toggleAddCard } = this.props;

    return (
      <div>
        <button type="button" onClick={handleClick}>
          {toggleAddCard ? 'Hide' : 'Add Card'}
        </button>
        {toggleAddCard
        && <AddCardForm />}
      </div>
    );
  }
}

ShowAddCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  toggleAddCard: PropTypes.bool.isRequired,
};
