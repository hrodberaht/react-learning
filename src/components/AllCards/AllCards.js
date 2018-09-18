import React, { Component } from "react";
import Card from "./Card/Card";

export default class AllCards extends Component {
  render() {
    const { cards, handleClick } = this.props;
    const list = cards.map(card => {
      return (
        <Card key={card.id} card={card} handleClick={id => handleClick(id)} />
      );
    });
    return <div>{list}</div>;
  }
}
