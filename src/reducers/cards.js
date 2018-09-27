const cards = (state = [], actions) => {
  switch (actions.type) {
    case 'FETCH_CARDS':
      return [...state, ...actions.cards];
    case 'ADD_CARD':
      return [...state, { id: actions.id, name: actions.name, email: actions.email }];
    case 'DELETE_CARD':
      return state.filter(card => card.id !== actions.id);
    default:
      return state;
  }
};

export default cards;
