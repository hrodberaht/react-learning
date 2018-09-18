import React, { Component } from "react";
import Card from "./Card/Card";

export default class AllCards extends Component {
  render() {
    const { cards, handleClick, filterText } = this.props;
    let list = [];
    if (filterText) {
      list = cards.filter((card) => {
          return card.name.toLowerCase().includes(filterText);
      });
    } else {
      list = cards;
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
