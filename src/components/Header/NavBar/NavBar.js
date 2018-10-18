import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ConnectedAuthorization from './Authorization/Authorization';

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="NavBar">
          <ul className="NavBar__ul">
            <li className="NavBar__ul__li">
              <NavLink className="NavBar__ul__li__a" to="/" exact>Home</NavLink>
            </li>
            <li className="NavBar__ul__li">
              <NavLink className="NavBar__ul__li__a" to="/cards">Cards</NavLink>
            </li>
            <li className="NavBar__ul__li">
              <NavLink className="NavBar__ul__li__a" to="/products">Products</NavLink>
            </li>
            <li className="NavBar__ul__li">
              <ConnectedAuthorization
                withAuth={logOut => <NavLink className="NavBar__ul__li__a" to="/login" onClick={logOut}>Log out</NavLink>}
                withoutAuth={<NavLink className="NavBar__ul__li__a" to="/login">Login</NavLink>}
              />
            </li>
          </ul>
        </div>
        <div className="NavBarNarrow">
          <i className="NavBarNarrow__ico fa fa-bars fa-2x" />
          <div className="menu">
            <ul className="menu__ul">
              <li className="menu__ul__li">
                <NavLink className="menu__ul__li__a" to="/" exact>Home</NavLink>
              </li>
              <li className="menu__ul__li">
                <NavLink className="menu__ul__li__a" to="/cards">Cards</NavLink>
              </li>
              <li className="menu__ul__li">
                <NavLink className="menu__ul__li__a" to="/products">Products</NavLink>
              </li>
              <li className="menu__ul__li">
                <ConnectedAuthorization
                  withAuth={logOut => <NavLink className="menu__ul__li__a" to="/login" onClick={logOut}>Log out</NavLink>}
                  withoutAuth={<NavLink className="menu__ul__li__a" to="/login">Login</NavLink>}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
