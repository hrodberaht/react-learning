import { connect } from 'react-redux';
import ShowAddCard from '../components/ShowAddCard/ShowAddCard';
import { toggleAddCard } from '../actions';


const mapStateToProps = state => ({
  toggleAddCard: state.toggleAddCard,
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(toggleAddCard),
});


export default connect(mapStateToProps, mapDispatchToProps)(ShowAddCard);
