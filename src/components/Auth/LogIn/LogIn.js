import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import { logIn } from '../../../actions';

export class LogIn extends Component {
    state = {
      login: '',
      password: '',
    }

    handleChange = (e) => {
      this.setState({ [e.target.id]: e.target.value });
    }

    resetState = () => {
      this.setState({
        login: '',
        password: '',
      });
    }

    handleSubmit = (e) => {
      const { login, password } = this.state;
      const { handleLogIn } = this.props;
      e.preventDefault();
      handleLogIn(login, password);
      this.resetState();
    }

    render() {
      if (this.props.auth) return (<Redirect to={{ pathname: '/cards' }} />);
      const { login, password } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="login">
          Login:
            <input id="login" type="text" value={login} onChange={this.handleChange} />
          </label>
          <label htmlFor="password">
          Password:
            <input id="password" type="password" value={password} onChange={this.handleChange} />
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
