import { combineReducers } from 'redux';

import cards from './cards';
import isAddCardVisible from './isAddCardVisible';
import filterText from './filterText';


export default combineReducers({ cards, isAddCardVisible, filterText });
