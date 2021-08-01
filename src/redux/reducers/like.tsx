import AsyncStorage from '@react-native-async-storage/async-storage'
import constants from '../constants/like'
import { IUser, IActionType, IStore } from '../../interfaces'

const initState: IStore<any> = {
  isLoading: false,
  content: [],
  error: undefined,
  message: undefined,
}

export default function likeList(state = initState, action: IActionType<any>) {
  switch (action.type) {
    case constants.LIKED_LOADING: {
      return { ...state, errors: undefined, isLoading: true }
    }
    case constants.LIKED_UNLIKE: {
      const users = state.content?.filter(
        (e) => e._id != (action.payload.user || '')
      )
      return { ...state, content: users, isLoading: false }
    }
    case constants.LIKED_USERS_LIST: {
      return { ...action.payload, error: undefined, isLoading: false }
    }
    case constants.LIKED_ERROR: {
      return { ...state, error: action.payload, isLoading: false }
    }
    default:
      return state
  }
}
