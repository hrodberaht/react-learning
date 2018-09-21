import React, { Component } from "react";
import "./AddCard.css";
import AddCardForm from "../../containers/AddCardForm";

export default class AddCard extends Component {
  
  render() {
    const { handleClick, toggleAddCard } = this.props;

    return (
      <div>
        <button type={"button"} onClick={handleClick}>
          {toggleAddCard ? "Hide" : "Add Card"}
        </button>
        {toggleAddCard 
        && 
        <AddCardForm />}
      </div>
    );
  }
}
