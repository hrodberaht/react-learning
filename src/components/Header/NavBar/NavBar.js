import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import { logOut } from '../../../actions';
import './NavBar.css';

export class NavBar extends Component {
  handleClick = () => {
    const { handleLogOut } = this.props;
    handleLogOut();
  }

  render() {
    const { auth } = this.props;
    return (
      <nav className="NavBar">
        <ul>
          <li>
            <NavLink to="/" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/cards">Cards</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            {
              auth
                ? <NavLink to="/login" onClick={this.handleClick}>Log out</NavLink>
                : <NavLink to="/login">Login</NavLink>
          }
          </li>
        </ul>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
});

export const ConnectedNavBar = withRouter(connect(mapStateToProps,
  { handleLogOut: logOut })(NavBar));

NavBar.propTypes = {
  auth: PropTypes.bool.isRequired,
  handleLogOut: PropTypes.func.isRequired,
};
