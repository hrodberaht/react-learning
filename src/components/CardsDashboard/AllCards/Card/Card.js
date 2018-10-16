import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      handleClick,
      card: { name, email, id },
    } = this.props;
    return (
      <div className="cards-list__card">
        <p>Name:</p>
        <h2>{name}</h2>
        <p>Email:</p>
        <h4>{email}</h4>
        <button
          className="btn danger-btn"
          type="button"
          onClick={() => handleClick(id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  card: PropTypes.shape(
    {
      name: PropTypes.string,
      email: PropTypes.string,
      id: PropTypes.number,
    },
  ).isRequired,
};
