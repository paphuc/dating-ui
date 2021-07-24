import AsyncStorage from '@react-native-async-storage/async-storage'
import constants from '../constants/auth'

const initState = {
  isLogged: false,
  token: undefined,
  errors: undefined,
}

export default function authReducer(
  state: Object = initState,
  action: any
) {
  switch (action.type) {
    case constants.AUTH_LOGIN: {
      AsyncStorage.setItem(
        'user',
        JSON.stringify(action.payload)
      )
      return { isLogged: true, ...action.payload }
    }
    case constants.AUTH_LOGOUT: {
      return initState
    }
    case constants.AUTH_ERROR: {
      return {
        isLogged: false,
        token: undefined,
        errors: action.payload,
      }
    }
    default:
      return state
  }
}
