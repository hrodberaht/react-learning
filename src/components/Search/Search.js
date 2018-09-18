import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { filter } = this.props;
    return (
      <div>
        <label htmlFor="search">Search by name:</label>
        <input id="search" type={"text"} onChange={filter}/>
      </div>
    );
  }
}
