import { combineReducers } from 'redux'
import languageStore from './language'
import authStore from './auth'
import userStore from './user'
import likedStore from './like'
import commonStore from './common'
import matchedStore from './match'
import updateUser from './updateUser'
import roomStore from './room'
import notification from './notification'

const appReducers = combineReducers({
  languageStore,
  authStore,
  userStore,
  likedStore,
  matchedStore,
  commonStore,
  updateUser,
  roomStore,
  notification
})

export type ApplicationState = ReturnType<typeof appReducers>

export default appReducers
