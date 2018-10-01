const isAuthenticated = (state = false, actions) => {
  switch (actions.type) {
    case 'LOGIN': return actions.isAuthenticated;
    default:
      return state;
  }
};

export default isAuthenticated;
