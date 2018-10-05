import { combineReducers } from 'redux';

import cards from './cards';
import isAddCardVisible from './isAddCardVisible';
import filterText from './filterText';
import products from './products';
import auth from './auth';

export default combineReducers({
  cards, isAddCardVisible, filterText, products, auth,
});
