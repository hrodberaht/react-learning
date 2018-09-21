const initialState = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com"
  },
  {
    id: 2,
    name: "Rob",
    email: "rob@gmail.com"
  }
];

const cards = (state = initialState, actions) => {
  switch (actions.type) {
    case "ADD_CARD":
      return [...state,{id: actions.id, name: actions.name,email: actions.email}];
    case "DELETE_CARD":
      const index = state.findIndex(card => card.id === actions.id);
      return [...state.slice(0, index), ...state.slice(index + 1)]
    default:
      return state;
  }
};

export default cards;
