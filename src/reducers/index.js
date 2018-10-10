import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cards from './cards';
import isAddCardVisible from './isAddCardVisible';
import filterText from './filterText';
import products from './products';
import auth from './auth';

export default combineReducers({
  cards,
  isAddCardVisible,
  filterText,
  products,
  auth,
  form: formReducer,
});
