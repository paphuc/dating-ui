import AsyncStorage from '@react-native-async-storage/async-storage'
import constants from '../constants'
import jwt_decode from 'jwt-decode'

import { IUser, IActionType, IStore } from '../../interfaces'

const initState: IStore<any> = {
  isLoading: false,
  isLogged: false,
  token: undefined,
  user: undefined,
  info: undefined,
}

export default function authReducer(state: Object = initState, action: any) {
  switch (action.type) {
    case constants.AUTH_LOADING:
      return { ...state, isLoading: true }
    case constants.AUTH_LOGIN: {
      AsyncStorage.setItem('user', JSON.stringify(action.payload))
      var decode = jwt_decode(action.payload?.token)
      return {
        isLogged: true,
        ...action.payload,
        user: decode,
        isLoading: false,
      }
    }
    case constants.AUTH_GET_ME: {
      return {
        ...state,
        isLogged: true,
        info: action.payload,
        isLoading: false,
      }
    }
    case constants.AUTH_LOGOUT: {
      AsyncStorage.removeItem('user')
      return {
        ...state,
        isLogged: false,
      }
    }
    case constants.AUTH_ERROR: {
      return {
        isLoading: false,
        isLogged: false,
        token: undefined,
        errors: action.payload,
      }
    }
    default:
      return state
  }
}
