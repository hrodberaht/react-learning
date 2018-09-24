const toggleAddCard = (state = false, actions) => {
  switch (actions.type) {
    case 'TOGGLE_ADD_CARD':
      return !state;
    default:
      return state;
  }
};

export default toggleAddCard;
