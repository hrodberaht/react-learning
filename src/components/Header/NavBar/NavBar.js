import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ConnectedAuthorization from './Authorization/Authorization';

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink to="/cards">Cards</NavLink>
            </li>
            <li className="navbar__item">
              <NavLink to="/products">Products</NavLink>
            </li>
            <li className="navbar__item">
              <ConnectedAuthorization
                withAuth={logOut => (
                  <NavLink to="/login" onClick={logOut}>
                    Log out
                  </NavLink>
                )}
                withoutAuth={<NavLink to="/login">Login</NavLink>}
              />
            </li>
          </ul>
        </div>
        <div className="navbar--narrow">
          <i className="navbar--narrow__ico fa fa-bars fa-2x" />
          <div className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink to="/cards">Cards</NavLink>
              </li>
              <li className="menu__item">
                <NavLink to="/products">Products</NavLink>
              </li>
              <li className="menu__item">
                <ConnectedAuthorization
                  withAuth={logOut => (
                    <NavLink to="/login" onClick={logOut}>
                      Log out
                    </NavLink>
                  )}
                  withoutAuth={<NavLink to="/login">Login</NavLink>}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
