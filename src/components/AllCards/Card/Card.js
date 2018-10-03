import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  card = {
    border: '1px solid black',
    width: '300px',
    margin: '5px auto',
  };

  button = {
    color: 'white',
    border: '1px solid red',
    fontSize: '16px',
    backgroundColor: 'red',
    padding: '5px',
  };

  render() {
    const {
      handleClick,
      card: { name, email, id },
    } = this.props;
    return (
      <div style={this.card}>
        <h2>
          Name:
          {name}
        </h2>
        <h4>
          Email:
          {email}
        </h4>
        <button
          style={this.button}
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
