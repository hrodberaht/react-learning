import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCard } from '../../../actions';


const mapDispatchToProps = dispatch => ({
  handleAddCard: card => dispatch(addCard(card.name, card.email)),
});

class AddCardForm extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.id]: e.target.value });
  };

  handleAdd = (card) => {
    const { handleAddCard } = this.props;
    handleAddCard(card);
    this.setState({
      name: '',
      email: '',
    });
  };

  render() {
    const { name, email } = this.state;
    return (
      <div className="AddCard">
        <label htmlFor="name">
          Name:
          <input
            id="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <button
          type="button"
          disabled={name.length < 3}
          onClick={() => this.handleAdd(this.state)}
        >
          Add
        </button>
      </div>
    );
  }
}

AddCardForm.propTypes = {
  handleAddCard: PropTypes.func.isRequired,
};

export { AddCardForm };
export const ConnectedAddCardForm = connect(null, mapDispatchToProps)(AddCardForm);
