import { connect } from "react-redux";
import AddCard from "../components/AddCard/AddCard";
import { toggleAddCard, addCard } from "../actions";


const mapStateToProps = (state) => ({
    toggleAddCard: state.toggleAddCard
})

const mapDispatchToProps = dispatch => ({
    handleClick: () => dispatch(toggleAddCard),
    handleAddCard: (card) => dispatch(addCard(card.name, card.email))

})


export default connect(mapStateToProps, mapDispatchToProps)(AddCard);