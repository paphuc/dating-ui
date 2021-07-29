import { combineReducers } from 'redux'
import languageStore from './language'
import authStore from './auth'
import userListStore from './userList'
import likedListStore from './likedList'
import matchedListStore from './matchedList'
import updateUser from './updateUser'
import listRoomsMatch from './listRoomsMatch'
const appReducers = combineReducers({
  languageStore,
  authStore,
  userListStore,
  likedListStore,
  matchedListStore,
  updateUser,
  listRoomsMatch
})

export type ApplicationState = ReturnType<
  typeof appReducers
>

export default appReducers
