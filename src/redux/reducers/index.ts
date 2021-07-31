import { combineReducers } from 'redux'
import languageStore from './language'
import authStore from './auth'
import userStore from './user'
import likedStore from './like'
import commonStore from './common'
import matchedStore from './matchedList'
import  updateUser from './updateUser'
import listRoomsMatch from './listRoomsMatch'
const appReducers = combineReducers({
  languageStore,
  authStore,
  userStore,
  likedStore,
  matchedStore,
  commonStore,
  updateUser,
  listRoomsMatch
})

export type ApplicationState = ReturnType<typeof appReducers>

export default appReducers
