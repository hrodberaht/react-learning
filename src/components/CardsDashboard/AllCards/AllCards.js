import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './Card/Card';
import { deleteCard } from '../../../actions';

export class AllCards extends Component {
  list = () => {
    const { cards, filterText } = this.props;
    if (filterText) {
      const regexp = new RegExp(filterText, 'i');
      return cards.filter(card => regexp.test(card.name));
    }
    return cards;
  };

  render() {
    const { handleClick } = this.props;
    return (
      <div className="cards-list">
        {this.list().map(card => (
          <Card
            key={card.id}
            card={card}
            handleClick={handleClick}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  filterText: state.filterText,
});

export default connect(
  mapStateToProps,
  {
    handleClick: deleteCard,
  },
)(AllCards);

AllCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,

  filterText: PropTypes.string.isRequired,
};
