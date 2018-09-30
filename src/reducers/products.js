const products = (state = [], actions) => {
  switch (actions.type) {
    case 'FETCH_PRODUCTS':
      return [...state, ...actions.products];
    default:
      return state;
  }
};

export default products;
