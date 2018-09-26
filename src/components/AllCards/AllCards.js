import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card/Card';


export default class AllCards extends Component {
  render() {
    const { cards, handleClick, filterText } = this.props;
    let list = cards;
    if (filterText) {
      list = cards.filter(card => card.name.toLowerCase().includes(filterText));
    }

    return (
      <div>
        {list.map(card => (
          <Card
            key={card.id}
            card={card}
            handleClick={id => handleClick(id)}
          />
        ))}
      </div>
    );
  }
}

AllCards.propTypes = {
  cards: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
};
