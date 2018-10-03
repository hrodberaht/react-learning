const filterText = (state = '', action) => {
  switch (action.type) {
    case 'FILTER':
      return action.filterText;
    default:
      return state;
  }
};

export default filterText;
