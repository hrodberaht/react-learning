export const addCard = (name, email) => ({
  type: 'ADD_CARD',
  name,
  email,
  id: Date.now(),
});

export const deleteCard = id => ({
  type: 'DELETE_CARD',
  id,
});

export const toggleCardVisable = () => ({
  type: 'TOGGLE_CARD_VISABLE',
});

export const filter = e => ({
  type: 'FILTER',
  filterText: e.target.value,
});
