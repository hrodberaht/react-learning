import React, { Component } from 'react';
import ConnectedLogIn from './LogIn/LogIn';

export default class Auth extends Component {
  render() {
    return (
      <section className="Login">
        <ConnectedLogIn />
      </section>
    );
  }
}
