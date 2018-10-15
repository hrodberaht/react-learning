import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ConnectedLogIn from './LogIn/LogIn';


export default class Auth extends Component {
  render() {
    return (
      <section className="Login">
        <ConnectedLogIn />
        <p>
          <Link to="/registration">Registration</Link>
        </p>
      </section>
    );
  }
}
