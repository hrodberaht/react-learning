import React, { Component } from 'react';
import { ConnectedLogIn } from './LogIn/LogIn';

export default class Auth extends Component {
  render() {
    return (
      <div>
        <ConnectedLogIn />
      </div>
    );
  }
}
