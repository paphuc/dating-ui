import { combineReducers } from 'redux'
import languageStore from './language'
import authStore from './auth'
import userListStore from './userList'
import likedListStore from './likedList'
import matchedListStore from './matchedList'

const appReducers = combineReducers({
  languageStore,
  authStore,
  userListStore,
  likedListStore,
  matchedListStore,
})

export type ApplicationState = ReturnType<typeof appReducers>

export default appReducers
