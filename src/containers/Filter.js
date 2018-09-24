import { connect } from 'react-redux';
import { filter } from '../actions';
import Search from '../components/Search/Search';

const mapDispatchToProps = dispatch => ({
  filter: e => dispatch(filter(e.target.value)),
});

export default connect(null, mapDispatchToProps)(Search);
