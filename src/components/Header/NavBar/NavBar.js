import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

export class NavBar extends Component {
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
                ? <NavLink to="/login">Log out</NavLink>
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

export const ConnectedNavBar = connect(mapStateToProps)(NavBar);

NavBar.propTypes = {
  auth: PropTypes.bool.isRequired,
};
