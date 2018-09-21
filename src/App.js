import React, { Component } from "react";
import "./App.css";

import VisibleCards from "./containers/VisibleCards";
import Filter from "./containers/Filter";
import AddCard from "./containers/AddCard";



class App extends Component {

  render() {
    return (
      <div className="App">
        <AddCard />
        <Filter />
        <VisibleCards />
      </div>
    );
  }
}

export default App;
