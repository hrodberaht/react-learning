import React, { Component } from "react";
import "./App.css";

import Card from "./components/Card/Card";
import AddCard from "./components/AddCard/AddCard";

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

  onAddCard = (card) => {
    const { cards, lastId } = this.state;
    cards.push({...card,id: lastId+1}); //TODO find another way to generate id
    console.log(card);

    this.setState({cards: cards, lastId: lastId+1});
  }

  onDeleteCard = (id) => {
    const { cards } = this.state;
    const index = cards.findIndex((card) => {
      return card.id === id;
    })
    cards.splice(index,1);
    this.setState({cards: cards})
  }

  render() {
    const { cards, showAddCard } = this.state;

    const list = cards.map(card => {
      return <Card key={card.id} card={card} handleClick={this.onDeleteCard}/>;
    });

    return (
      <div className="App">
        <AddCard 
        showAddCard={showAddCard} 
        handleClick={this.onShowAddCard} 
        handleAdd={this.onAddCard}
        />
        {list}
      </div>
    );
  }
}

export default App;
