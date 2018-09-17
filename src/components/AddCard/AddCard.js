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

  handleAdd = card => {
    const { handleAddCard } = this.props;
    handleAddCard(card);
    this.setState({
      name: "",
      email: ""
    });
  };

  render() {
    const { handleClick, showAddCard } = this.props;
    const form = (
      <div className={"AddCard"}>
        <label htmlFor={"name"}>Name: </label>
        <input id={"name"} type={"text"} value={this.state.name} onChange={this.handleChange} />
        <label htmlFor={"email"}>Email: </label>
        <input id={"email"} type={"email"} value={this.state.email} onChange={this.handleChange} />
        <button
          type={"button"}
          disabled={this.state.name.length < 3}
          onClick={() => this.handleAdd(this.state)}
        >
          Add
        </button>
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
