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
  ]
};

let newId = 2; //only for add id to card

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "ADD_CARD":
      return {...state,cards: [...state.cards,{
        id: ++newId,
        name: actions.name,
        email: actions.email
      }]}
    default:
      return state;
  }
};

const addCard = (name,email) => ({
  type: "ADD_CARD",
  name: name,
  email: email
});

const store = createStore(reducer);

export { store, addCard };
