import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';
import ConnectedAuthorization from './Authorization/Authorization';

export default class NavBar extends Component {
  render() {
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
            <ConnectedAuthorization />
          </li>
        </ul>
      </nav>
    );
  }
}
