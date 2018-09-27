export const fetchCards = () => dispatch => fetch('http://localhost:3004/cards')
  .then(res => res.json())
  .then((cards) => {
    dispatch({
      type: 'FETCH_CARDS',
      cards,
    });
  })
  .catch(() => alert('Sorry server not working!!!'));


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
