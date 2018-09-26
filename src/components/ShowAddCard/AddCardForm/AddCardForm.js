import React, { Component } from "react";
import PropTypes from 'prop-types'


export default class AddCardForm extends Component {
  state = {
    name: "",
    email: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.id]: e.target.value });
  };

  handleAdd = card => {
    const { handleAddCard } = this.props;
    handleAddCard(card);
    this.setState({
      name: "",
      email: ""
    });
  };

  render() {
    return (
      <div className={"AddCard"}>
        <label htmlFor={"name"}>Name: </label>
        <input
          id={"name"}
          type={"text"}
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor={"email"}>Email: </label>
        <input
          id={"email"}
          type={"email"}
          value={this.state.email}
          onChange={this.handleChange}
        />
        <button
          type={"button"}
          disabled={this.state.name.length < 3}
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
}
