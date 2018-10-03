const isAddCardVisible = (state = false, actions) => {
  switch (actions.type) {
    case 'TOGGLE_CARD_VISABLE':
      return !state;
    default:
      return state;
  }
};

export default isAddCardVisible;
