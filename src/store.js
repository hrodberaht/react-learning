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

let newId = 2; //only for add id to card

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "ADD_CARD":
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            id: ++newId,
            name: actions.name,
            email: actions.email
          }
        ]
      };
    case "TOGGLE_ADD_CARD":
      return { ...state, showAddCard: !state.showAddCard };
    case "FILTER":
      return { ...state, filterText: actions.filterText };
    default:
      return state;
  }
};

const addCard = (name, email) => ({
  type: "ADD_CARD",
  name: name,
  email: email
});

const toggleAddCard = {
  type: "TOGGLE_ADD_CARD"
};

const filter = filterText => ({
  type: "FILTER",
  filterText
});

const store = createStore(reducer);

export { store, addCard, toggleAddCard, filter};
