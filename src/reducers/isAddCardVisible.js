const isAddCardVisible = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_CARD_VISABLE':
      return !state;
    default:
      return state;
  }
};

export default isAddCardVisible;
