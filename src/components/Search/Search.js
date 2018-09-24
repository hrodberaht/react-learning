import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filter } from '../../actions';

const mapDispatchToProps = dispatch => ({
  handleChange: e => dispatch(filter(e.target.value)),
});
class Search extends Component {
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

export { Search };
export const ConnectedSearch = connect(null, mapDispatchToProps)(Search);
