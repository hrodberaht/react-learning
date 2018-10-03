const cards = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CARDS':
      return [...state, ...action.cards];
    case 'ADD_CARD':
      return [...state, { id: action.id, name: action.name, email: action.email }];
    case 'DELETE_CARD':
      return state.filter(card => card.id !== action.id);
    default:
      return state;
  }
};

export default cards;
