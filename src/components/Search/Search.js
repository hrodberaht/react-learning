import React, { Component } from "react";
import PropTypes from 'prop-types';

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

Search.propTypes = {
  filter: PropTypes.func.isRequired
};
