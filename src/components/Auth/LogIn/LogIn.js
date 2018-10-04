import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { logIn } from '../../../actions';

export class LogIn extends Component {
    state = {
      login: '',
      email: '',
    }

    handleChange = (e) => {
      this.setState({ [e.target.id]: e.target.value });
    }

    resetState = () => {
      this.setState({
        login: '',
        email: '',
      });
    }

    redirect = () => {
      const { history } = this.props;
      history.push('/cards');
    }

    handleSubmit = (e) => {
      const { login, email } = this.state;
      const { handleLogIn } = this.props;
      e.preventDefault();
      handleLogIn(login, email);
      this.resetState();
      this.redirect();
    }

    render() {
      const { login, email } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="login">
          Login:
            <input id="login" type="text" value={login} onChange={this.handleChange} />
          </label>
          <label htmlFor="email">
          Email:
            <input id="email" type="email" value={email} onChange={this.handleChange} />
          </label>
          <button type="submit">Log In</button>
        </form>
      );
    }
}

export default withRouter(connect(null, { handleLogIn: logIn })(LogIn));

LogIn.propTypes = {
  handleLogIn: PropTypes.func.isRequired,
};
