import { connect } from 'react-redux';
import { addCard } from '../actions';
import AddCardForm from '../components/ShowAddCard/AddCardForm/AddCardForm';


const mapDispatchToProps = dispatch => ({
  handleAddCard: card => dispatch(addCard(card.name, card.email)),
});


export default connect(null, mapDispatchToProps)(AddCardForm);
