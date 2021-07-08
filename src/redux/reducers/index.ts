import { combineReducers } from "redux";
import languageStore from './language';
import authStore from './auth'

const appReducers = combineReducers({
    languageStore,
    authStore
});

export default appReducers;
