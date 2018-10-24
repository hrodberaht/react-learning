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
              <NavLink className="navbar__item__link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink className="navbar__item__link" to="/cards">
                Cards
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink className="navbar__item__link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="navbar__item">
              <ConnectedAuthorization
                withAuth={logOut => (
                  <NavLink className="navbar__item__link" to="/login" onClick={logOut}>
                    Log out
                  </NavLink>
                )}
                withoutAuth={(
                  <NavLink className="navbar__item__link" to="/login">
                    Login
                  </NavLink>
)}
              />
            </li>
          </ul>
        </div>
        <div className="navbar--narrow">
          <i className="navbar--narrow__ico fa fa-bars fa-2x" />
          <div className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <NavLink className="menu__item__link" to="/" exact>
                  Home
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink className="menu__item__link" to="/cards">
                  Cards
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink className="menu__item__link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="menu__item">
                <ConnectedAuthorization
                  withAuth={logOut => (
                    <NavLink className="menu__item__link" to="/login" onClick={logOut}>
                      Log out
                    </NavLink>
                  )}
                  withoutAuth={(
                    <NavLink className="menu__item__link" to="/login">
                      Login
                    </NavLink>
)}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
