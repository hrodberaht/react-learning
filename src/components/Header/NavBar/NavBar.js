import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Cards">Cards</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
