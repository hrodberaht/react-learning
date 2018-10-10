import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logOut } from '../../../../actions';

export class Authorization extends Component {
  render() {
    const { children, auth, handleLogOut } = this.props;
    return children(auth, handleLogOut);
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps,
  { handleLogOut: logOut })(Authorization));

Authorization.propTypes = {
  children: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
  handleLogOut: PropTypes.func.isRequired,
};
