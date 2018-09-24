let newId = 2; // only for add id to card

export const addCard = (name, email) => ({
  type: 'ADD_CARD',
  name,
  email,
  id: ++newId,
});

export const deleteCard = id => ({
  type: 'DELETE_CARD',
  id,
});

export const toggleCardVisable = () => ({
  type: 'TOGGLE_CARD_VISABLE',
});

export const filter = filterText => ({
  type: 'FILTER',
  filterText,
});
