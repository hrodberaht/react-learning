import React, { Component } from "react";

export default class AddCard extends Component {
  render() {
    return (
      <div>
        <label htmlFor={"name"}>Name: </label>
        <input id={"name"} type={"text"} />
        <label htmlFor={"email"}>Email: </label>
        <input id={"email"} type={"email"} />
        <button type={"button"}>Add</button>
      </div>
    );
  }
}
