import React, { Component } from "react";
import "./App.css";

import AddCard from "./components/AddCard/AddCard";
import AllCards from "./components/AllCards/AllCards";
import Search from "./components/Search/Search";

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
    this.setState({
      cards: [
        {
          id: 1,
          name: "John",
          email: "john@gmail.com"
        },
        {
          id: 2,
          name: "Rob",
          email: "rob@gmail.com"
        }
      ]
    });
  }

  onShowAddCard = () => {
    const { showAddCard } = this.state;
    this.setState({ showAddCard: !showAddCard });
  };

  onAddCard = card => {
    const { cards, lastId } = this.state;
    cards.unshift({ ...card, id: lastId + 1 });
    this.setState({ cards: cards, lastId: lastId + 1 });
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
