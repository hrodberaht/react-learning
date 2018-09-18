import React, { Component } from "react";
import "./App.css";

import AddCard from "./components/AddCard/AddCard";
import AllCards from "./components/AllCards/AllCards";

class App extends Component {
  state = {
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
    ],
    showAddCard: false,
    lastId: 2
  };

  onShowAddCard = () => {
    const { showAddCard } = this.state;
    this.setState({ showAddCard: !showAddCard });
  };

  onAddCard = card => {
    const { cards, lastId } = this.state;
    cards.unshift({ ...card, id: lastId + 1 });
    console.log(card);

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

  render() {
    const { cards, showAddCard } = this.state;
    return (
      <div className="App">
        <AddCard
          showAddCard={showAddCard}
          handleClick={this.onShowAddCard}
          handleAddCard={this.onAddCard}
        />
        <AllCards cards={cards} handleClick={this.onDeleteCard}/>
      </div>
    );
  }
}

export default App;
