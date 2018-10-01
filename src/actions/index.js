const errorAfterFetch = err => ({
  type: 'ERROR',
  err,
});

const fetchCardsSucces = cards => ({
  type: 'FETCH_CARDS',
  cards,
});

const addCardSucces = card => ({
  type: 'ADD_CARD',
  name: card.name,
  email: card.email,
  id: card.id,
});

const deleteCardSucces = id => ({
  type: 'DELETE_CARD',
  id,
});

const logInSucces = () => ({
  type: 'LOGIN',
  isAuthenticated: true,
});
const url = 'http://localhost:3004/cards/';

export const fetchCards = () => dispatch => fetch(url)
  .then(res => res.json())
  .then(cards => dispatch(fetchCardsSucces(cards)))
  .catch(err => dispatch(errorAfterFetch(err)));


export const addCard = (name, email) => dispatch => fetch(url,
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
  })
  .then(res => res.json())
  .then(card => dispatch(addCardSucces(card)))
  .catch(err => dispatch(errorAfterFetch(err)));

export const deleteCard = id => dispatch => fetch(url + id,
  {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(res => res.json())
  .then(() => dispatch(deleteCardSucces(id)))
  .catch(err => dispatch(errorAfterFetch(err)));

export const logIn = (login, email) => (dispatch) => {
  if (login === 'rob' && email === 'rob@rob.pl') {
    dispatch(logInSucces());
  }

  return errorAfterFetch;
};

export const toggleCardVisable = () => ({
  type: 'TOGGLE_CARD_VISABLE',
});

export const filter = e => ({
  type: 'FILTER',
  filterText: e.target.value,
});
