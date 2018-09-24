import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AddCard.css';
import AddCardForm from '../../containers/AddCardForm';

export default class ShowAddCard extends Component {
  render() {
    const { handleClick, isAddCardVisible } = this.props;

    return (
      <div>
        <button type="button" onClick={handleClick}>
          {isAddCardVisible ? 'Hide' : 'Add Card'}
        </button>
        {isAddCardVisible && <AddCardForm />}
      </div>
    );
  }
}

ShowAddCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isAddCardVisible: PropTypes.bool.isRequired,
};
