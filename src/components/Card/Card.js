import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { name, email, id} = this.props.card;
    const {handleClick} = this.props;
    return (
      <div>
        <h2>Name: {name} </h2>
        <h4>Email: {email}</h4>
        <button type={"button"} onClick={() => handleClick(id)}>Delete</button>
      </div>
    );
  }
}
