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

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "Show":
      return state;
    default:
      return state;
  }
};

const show = {
    type: 'Show'
}

const store = createStore(reducer);


export default store;
