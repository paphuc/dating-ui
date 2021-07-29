import AsyncStorage from '@react-native-async-storage/async-storage'
import constants from '../constants/auth'
import jwt_decode from 'jwt-decode'

const initState = {
  isLoading: false,
  isLogged: false,
  token: undefined,
  errors: undefined,
  user: undefined,
}

export default function authReducer(state: Object = initState, action: any) {
  switch (action.type) {
    case constants.AUTH_LOGIN: {
      AsyncStorage.setItem('user', JSON.stringify(action.payload))
      var decode = jwt_decode(action.payload?.token)
      return { isLogged: true, ...action.payload, user: decode }
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
