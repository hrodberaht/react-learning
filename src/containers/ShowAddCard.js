import { connect } from 'react-redux';
import ShowAddCard from '../components/ShowAddCard/ShowAddCard';
import { isAddCardVisible } from '../actions';


const mapStateToProps = state => ({
  isAddCardVisible: state.isAddCardVisible,
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(isAddCardVisible()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ShowAddCard);
