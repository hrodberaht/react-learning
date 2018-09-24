const isAddCardVisible = (state = false, actions) => {
  switch (actions.type) {
    case 'IS_ADD_CARD_VISABLE':
      return !state;
    default:
      return state;
  }
};

export default isAddCardVisible;
