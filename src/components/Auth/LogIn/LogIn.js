import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
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

    handleSubmit = (e) => {
      const { login, email } = this.state;
      const { handleLogIn } = this.props;
      e.preventDefault();
      handleLogIn(login, email);
      this.resetState();
    }

    render() {
      if (this.props.auth) return (<Redirect to={{ pathname: '/cards' }} />);
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
const mapStateToProps = state => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps, { handleLogIn: logIn })(LogIn));

LogIn.propTypes = {
  handleLogIn: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
};
