import React, { Component } from "react";
import "./App.css";

import AddCard from "./components/AddCard/AddCard";
import AllCards from "./components/AllCards/AllCards";
import Search from "./components/Search/Search";
import { addCard, toggleAddCard, filter, deleteCard } from "./actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { state };
};
class App extends Component {
  onShowAddCard = () => {
    this.props.dispatch(toggleAddCard);
  };

  onAddCard = card => {
    const { name, email } = card;
    this.props.dispatch(addCard(name, email));
  };

  onDeleteCard = id => {
    this.props.dispatch(deleteCard(id));
  };

  onFilter = e => {
    this.props.dispatch(filter(e.target.value));
  };

  render() {
    const { cards, showAddCard, filterText } = this.props.state;
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
export { App };
export default connect(mapStateToProps)(App);
