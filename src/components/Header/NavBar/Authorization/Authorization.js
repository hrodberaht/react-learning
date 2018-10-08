import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logOut } from '../../../../actions';

export class Authorization extends Component {
  render() {
    const {
      auth, withAuth, withoutAuth, handleLogOut,
    } = this.props;
    if (auth) return withAuth(handleLogOut);

    return withoutAuth;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps,
  { handleLogOut: logOut })(Authorization));

Authorization.propTypes = {
  withAuth: PropTypes.func.isRequired,
  withoutAuth: PropTypes.element.isRequired,
  auth: PropTypes.bool.isRequired,
  handleLogOut: PropTypes.func.isRequired,
};
