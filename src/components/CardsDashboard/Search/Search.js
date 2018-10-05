import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filter } from '../../../actions';

export class Search extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="search">
          Search by name:
          <input id="search" type="text" onChange={handleChange} />
        </label>
      </div>
    );
  }
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export const ConnectedSearch = connect(null, { handleChange: filter })(Search);
