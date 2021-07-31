import { combineReducers } from 'redux'
import languageStore from './language'
import authStore from './auth'
import userStore from './user'
import likedStore from './like'
import commonStore from './common'
import matchedStore from './matchedList'

const appReducers = combineReducers({
  languageStore,
  authStore,
  userStore,
  likedStore,
  matchedStore,
  commonStore
})

export type ApplicationState = ReturnType<typeof appReducers>

export default appReducers
