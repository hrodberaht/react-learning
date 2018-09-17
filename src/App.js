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
    ]
  };

  render() {
    const { cards } = this.state;

    const list = cards.map(card => {
      return <Card key={card.id} card={card} />;
    });

    return (
      <div className="App">
        <AddCard />
        {list}
      </div>
    );
  }
}

export default App;
