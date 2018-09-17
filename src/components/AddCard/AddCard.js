import React, { Component } from "react";
import "./AddCard.css";

export default class AddCard extends Component {
  state = {
    name: "",
    email: ""
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { handleClick, showAddCard, handleAdd } = this.props;
    const form = (
      <div className={"AddCard"}>
        <label htmlFor={"name"}>Name: </label>
        <input id={"name"} type={"text"} onChange={this.handleChange} />
        <label htmlFor={"email"}>Email: </label>
        <input id={"email"} type={"email"} onChange={this.handleChange} />
        <button type={"button"} onClick={() => handleAdd(this.state)}>Add</button>
      </div>
    );

    return (
      <div>
        <button type={"button"} onClick={handleClick}>
          {showAddCard ? "Hide" : "Add Card"}
        </button>
        {showAddCard ? form : null}
      </div>
    );
  }
}
