import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import { logOut } from '../../../../actions';

export class Authorization extends Component {
  render() {
    const { handleLogOut, auth } = this.props;
    if (auth) return <NavLink to="/login" onClick={handleLogOut}>Log out</NavLink>;

    return <NavLink to="/login">Login</NavLink>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps,
  { handleLogOut: logOut })(Authorization));

Authorization.propTypes = {
  auth: PropTypes.bool.isRequired,
  handleLogOut: PropTypes.func.isRequired,
};
