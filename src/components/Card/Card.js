import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { name, email, id} = this.props.card;
    const {handleClick} = this.props;
    return (
      <div style={this.card}>
        <h2>Name: {name} </h2>
        <h4>Email: {email}</h4>
        <button style={this.button} type={"button"} onClick={() => handleClick(id)}>Delete</button>
      </div>
    );
  }

  card = {
      border: "1px solid black",
      width: "300px",
      margin: "5px auto"
  }

  button = {
      color: "white",
      border: "1px solid red",
      fontSize: "16px",
      backgroundColor: "red",
      padding: "5px"

  }
}
