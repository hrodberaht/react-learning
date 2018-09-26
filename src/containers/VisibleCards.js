import { connect } from "react-redux";
import AllCards from "../components/AllCards/AllCards";
import { deleteCard } from "../actions";

const mapStateToProps = state => ({
  cards: state.cards,
  filterText: state.filterText
});

const mapDispatchToProps = dispatch => ({
  handleClick: (id) => dispatch(deleteCard(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(AllCards);
