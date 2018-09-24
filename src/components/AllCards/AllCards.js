import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './Card/Card';
import { deleteCard } from '../../actions';

const mapStateToProps = state => ({
  cards: state.cards,
  filterText: state.filterText,
});

class AllCards extends Component {
  render() {
    const { handleClick } = this.props;
    const list = () => {
      const { cards, filterText } = this.props;
      if (filterText) {
        const regexp = new RegExp(filterText, 'i');
        return cards.filter(card => regexp.test(card.name));
      }
      return cards;
    };
    return (
      <React.Fragment>
        {list().map(card => (
          <Card
            key={card.id}
            card={card}
            handleClick={handleClick}
          />
        ))}
      </React.Fragment>
    );
  }
}

AllCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
};
export { AllCards };
export const ConnectedAllCards = connect(
  mapStateToProps,
  { handleClick: deleteCard },
)(AllCards);
