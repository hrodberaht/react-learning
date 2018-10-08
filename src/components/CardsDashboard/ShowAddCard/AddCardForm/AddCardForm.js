import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCard } from '../../../../actions';

export class AddCardForm extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  resetState = () => {
    this.setState({
      name: '',
      email: '',
    });
  }

  handleAdd = (e) => {
    e.preventDefault();
    const { name, email } = this.state;
    const { handleAddCard } = this.props;
    handleAddCard(name, email);
    this.resetState();
  };

  render() {
    const { name, email } = this.state;
    return (

      <div className="AddCard">
        <form onSubmit={this.handleAdd}>
          <input
            id="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
          Email:
          <input
            id="email"
            type="email"
            value={email}
            onChange={this.handleChange}
          />
          <button
            id="submit"
            type="submit"
            disabled={name.length < 3}
          >
          Add
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { handleAddCard: addCard },
)(AddCardForm);

AddCardForm.propTypes = {
  handleAddCard: PropTypes.func.isRequired,
};
