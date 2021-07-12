import { combineReducers } from "redux";
import languageStore from './language';
import authStore from './auth'
import userListStore from "./userList";
const appReducers = combineReducers({
    languageStore,
    authStore,
    userListStore
});

export default appReducers;
