import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './Card/Card';
import { deleteCard } from '../../actions';

const mapStateToProps = state => ({
  cards: state.cards,
  filterText: state.filterText,
});

const mapDispatchToProps = dispatch => ({
  handleClick: id => dispatch(deleteCard(id)),
});
class AllCards extends Component {
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
            handleClick={handleClick}
          />
        ))}
      </div>
    );
  }
}

AllCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
};
export { AllCards };
export const ConnectedAllCards = connect(mapStateToProps, mapDispatchToProps)(AllCards);
