import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './Card/Card';
import { deleteCard, fetchCards } from '../../actions';

export class AllCards extends Component {
  componentDidMount() {
    const { handleFetch } = this.props;
    handleFetch();
  }

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
  handleFetch: PropTypes.func.isRequired,

  filterText: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  cards: state.cards,
  filterText: state.filterText,
});

export const ConnectedAllCards = connect(
  mapStateToProps,
  {
    handleClick: deleteCard,
    handleFetch: fetchCards,
  },
)(AllCards);
