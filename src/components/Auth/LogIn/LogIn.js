import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LogIn extends Component {
    state = {
      login: '',
      email: '',
    }

    handleChange = (e) => {
      this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();

      this.setState({
        login: '',
        email: '',
      });
    }

    render() {
      const { login, email } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <input id="login" value={login} onChange={this.handleChange} />
          <input id="email" value={email} onChange={this.handleChange} />
          <button type="submit">Log In</button>
        </form>
      );
    }
}

LogIn.propTypes = {

};
