import { combineReducers } from "redux";

import cards from "./cards";
import toggleAddCard from "./toggleAddCard";
import filterText from "./filterText";




export default combineReducers({cards,toggleAddCard, filterText});