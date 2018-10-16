import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filter } from '../../../actions';

export class Search extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div className="search-card">
        <label htmlFor="search">
          <p>Search by name:</p>
          <i className="fa fa-search" />
          <input className="form-input" id="search" type="text" onChange={handleChange} />
        </label>
      </div>
    );
  }
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default connect(null, { handleChange: filter })(Search);
