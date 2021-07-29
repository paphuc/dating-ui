import AsyncStorage from '@react-native-async-storage/async-storage'
import constants from '../constants/like'
import { IUser, IActionType } from '../../interfaces'

const initState = {
  isLoading: false,
  errors: undefined,
}

export default function likeList(state = initState, action: IActionType) {
  switch (action.type) {
    case constants.LIKED_LOADING: {
      return { errors: undefined, isLoading: true }
    }
    case constants.LIKED_USERS_LIST: {
      return { ...action.payload, errors: undefined, isLoading: false }
    }
    case constants.LIKED_ERROR: {
      return { errors: action.payload, isLoading: false }
    }
    default:
      return state
  }
}
