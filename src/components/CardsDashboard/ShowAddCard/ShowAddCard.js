import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './AddCard.css';
import ConnectedAddCardForm from './AddCardForm/AddCardForm';
import { toggleCardVisable } from '../../../actions';


export class ShowAddCard extends Component {
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

const mapStateToProps = state => ({
  isAddCardVisible: state.isAddCardVisible,
});

export default connect(
  mapStateToProps,
  { handleClick: toggleCardVisable },
)(ShowAddCard);

ShowAddCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isAddCardVisible: PropTypes.bool.isRequired,
};
