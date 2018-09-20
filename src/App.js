import React, { Component } from "react";
import "./App.css";

import AddCard from "./components/AddCard/AddCard";
import AllCards from "./components/AllCards/AllCards";
import Search from "./components/Search/Search";
import { addCard } from "./store";

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

  componentWillMount() {
    const { getState } = this.props.store;
    const state = getState();
    this.setState({
      cards: state.cards
    });
    this.unsubscribe = this.props.store.subscribe(() => {
      const newState = this.props.store.getState();
      this.setState({ cards: newState.cards });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onShowAddCard = () => {
    const { showAddCard } = this.state;
    this.setState({ showAddCard: !showAddCard });
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
    const { cards, showAddCard, filterText } = this.state;
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

export default App;
