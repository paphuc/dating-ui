import { combineReducers } from "redux";
import languageReducer from './language';

const appReducers = combineReducers({
    languageReducer
});

export default appReducers;