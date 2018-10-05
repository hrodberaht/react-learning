import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { logIn } from '../../../actions';

export default class LogIn extends Component {
    state = {
      login: '',
      email: '',
    }

    handleChange = (e) => {
      this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = (e) => {
      const { login, email } = this.state;
      const { handleLogIn, history } = this.props;
      e.preventDefault();
      handleLogIn(login, email);
      this.setState({
        login: '',
        email: '',
      });
      history.push('/cards');
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

export const ConnectedLogIn = withRouter(connect(null, { handleLogIn: logIn })(LogIn));

LogIn.propTypes = {
  handleLogIn: PropTypes.func.isRequired,
};
