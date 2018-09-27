export const fetchCards = () => dispatch => fetch('http://localhost:3004/cards')
  .then(res => res.json())
  .then((cards) => {
    dispatch({
      type: 'FETCH_CARDS',
      cards,
    });
  })
  .catch(err => dispatch({
    type: 'ERROR',
    err,
  }));


export const addCard = (name, email) => dispatch => fetch('http://localhost:3004/cards',
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
  })
  .then(res => res.json())
  .then(res => dispatch({
    type: 'ADD_CARD',
    name,
    email,
    id: res.id,
  }))
  .catch(err => dispatch({
    type: 'ERROR',
    err,
  }));

export const deleteCard = id => dispatch => fetch(`http://localhost:3004/cards/${id}`,
  {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(res => res.json())
  .then(() => dispatch({
    type: 'DELETE_CARD',
    id,
  }))
  .catch(err => dispatch({
    type: 'ERROR',
    err,
  }));

export const toggleCardVisable = () => ({
  type: 'TOGGLE_CARD_VISABLE',
});

export const filter = e => ({
  type: 'FILTER',
  filterText: e.target.value,
});
