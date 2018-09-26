import React, { Component } from "react";
import Card from "./Card/Card";

export default class AllCards2 extends Component {
  
  render() {
    const { cards, handleClick, filterText } = this.props;
    let list = cards;
    if (filterText) {
      list = cards.filter((card) => {
          return card.name.toLowerCase().includes(filterText);
      });
    }

    return (
      <div>
        {list.map(card => {
          return (
            <Card
              key={card.id}
              card={card}
              handleClick={id => handleClick(id)}
            />
          );
        })}
      </div>
    );
  }
}
