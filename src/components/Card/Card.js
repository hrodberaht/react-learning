import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { name, email } = this.props.card;
    return (
      <div>
        <h2>Name: {name} </h2>
        <h4>Email: {email}</h4>
      </div>
    );
  }
}
