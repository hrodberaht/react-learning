import React, { Component } from "react";
import "./App.css";

import VisibleCards from "./containers/VisibleCards";
import Filter from "./containers/Filter";
import ShowAddCard from "./containers/ShowAddCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShowAddCard />
        <Filter />
        <VisibleCards />
      </div>
    );
  }
}

export default App;
