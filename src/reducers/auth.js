const isAuthenticated = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN': return action.isAuthenticated;
    case 'LOGOUT': return action.isAuthenticated;
    default:
      return state;
  }
};

export default isAuthenticated;
