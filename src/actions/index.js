let newId = 2; // only for add id to card

const addCard = (name, email) => ({
  type: 'ADD_CARD',
  name,
  email,
  id: ++newId,
});

const deleteCard = id => ({
  type: 'DELETE_CARD',
  id,
});

const toggleAddCard = {
  type: 'TOGGLE_ADD_CARD',
};

const filter = filterText => ({
  type: 'FILTER',
  filterText,
});

export {
  addCard, deleteCard, toggleAddCard, filter,
};
