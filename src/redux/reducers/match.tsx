import AsyncStorage from '@react-native-async-storage/async-storage'
import constants from '../constants/match'
import { IUser, IActionType, IStore } from '../../interfaces'

const initState: IStore<any> = {
  content: [],
  isLoading: false,
}

export default function matchedList(
  state: IStore<any> = initState,
  action: IActionType<any>
) {
  switch (action.type) {
    case constants.MATCH_LOADING:
      return { ...state, isLoading: true }
    case constants.MATCH_USERS_LIST:
      return { ...action.payload, isLoading: false }
    case constants.MATCH_ERROR:
      return { ...state, isLoading: false }
    default:
      return state
  }
}
