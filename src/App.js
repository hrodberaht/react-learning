import React, { Component } from "react";
import "./App.css";

import AddCard from "./components/AddCard/AddCard";
import AllCards from "./components/AllCards/AllCards";
import Search from "./components/Search/Search";
import { addCard, toggleAddCard } from "./store";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {state}
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      showAddCard: false,
      lastId: 2,
      filterText: ""
    };
  }

  onShowAddCard = () => {
    this.props.dispatch(toggleAddCard());
  };

  onAddCard = card => {
    const { name, email } = card;
    const { dispatch } = this.props.store;
    dispatch(addCard(name, email));
  };

  onDeleteCard = id => {
    const { cards } = this.state;
    const index = cards.findIndex(card => {
      return card.id === id;
    });
    cards.splice(index, 1);
    this.setState({ cards: cards });
  };

  onFilter = e => {
    this.setState({ filterText: e.target.value });
  };

  render() {
    const { cards, showAddCard, filterText } = this.props.state;
    console.log(this.props.state)
    return (
      <div className="App">
        <AddCard
          showAddCard={showAddCard}
          handleClick={this.onShowAddCard}
          handleAddCard={this.onAddCard}
        />
        <Search filter={this.onFilter} />
        <AllCards
          cards={cards}
          handleClick={this.onDeleteCard}
          filterText={filterText}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);

