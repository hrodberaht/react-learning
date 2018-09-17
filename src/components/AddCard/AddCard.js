import React, { Component } from "react";
import "./AddCard.css";

export default class AddCard extends Component {
  render() {
    const { handleClick, showAddCard } = this.props;
    const form = (
      <div className={"AddCard"}>
        <label htmlFor={"name"}>Name: </label>
        <input id={"name"} type={"text"} />
        <label htmlFor={"email"}>Email: </label>
        <input id={"email"} type={"email"} />
        <button type={"button"}>Add</button>
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
