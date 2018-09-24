const filterText = (state = '', actions) => {
  switch (actions.type) {
    case 'FILTER':
      return actions.filterText;
    default:
      return state;
  }
};

export default filterText;
