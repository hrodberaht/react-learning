import { createStore } from "redux";

const initialState = {
  cards: [
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
  ],
  showAddCard: false,
  filterText: ""
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "ADD_CARD":
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            id: actions.id,
            name: actions.name,
            email: actions.email
          }
        ]
      };
    case "DELETE_CARD":
      const index = state.cards.findIndex((card) => card.id === actions.id )
      return { ...state,
        cards: [
          ...state.cards.slice(0,index),
          ...state.cards.slice(index +1)]
      };
    case "TOGGLE_ADD_CARD":
      return { ...state, showAddCard: !state.showAddCard };
    case "FILTER":
      return { ...state, filterText: actions.filterText };
    default:
      return state;
  }
};


const store = createStore(reducer);

export { store };
