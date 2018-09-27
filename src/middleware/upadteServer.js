/* eslint no-unused-vars: 0 */
const updateServer = store => next => (action) => {
  if (action.type === 'ADD_CARD') {
    fetch('http://localhost:3004/cards', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: action.id, name: action.name, email: action.email }),
    }).then(res => res.json())
      .then((res) => {
      });
  }

  if (action.type === 'DELETE_CARD') {
    fetch(`http://localhost:3004/cards/${action.id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
      .then((res) => {
      });
  }

  next(action);
};
  /* eslint-enable */

export default updateServer;
