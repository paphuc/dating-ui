import AsyncStorage from '@react-native-async-storage/async-storage'
import constants from '../constants/user'
import { IUser, IActionType, IStore } from '../../interfaces'

const initState: IStore<any> = {
  isLoading: false,
  error: undefined,
  message: undefined,

}

export default function authUserList(state = initState, action: IActionType<any>) {
  switch (action.type) {
    case constants.USER_LOADING:
      return { ...state, isLoading: true }
    case constants.USER_LIST: {
      return { ...action.payload, isLoading: false }
    }
    case constants.USER_LIKE: {
      const users = state.content?.filter(
        (e:IUser) => e._id != (action.payload?.target_user_id || '')
      )
      return { ...state, content: users }
    }
    case constants.USER_ERROR: {
      return { error: action.payload, isLoading: false }
    }
    default:
      return state
  }
}
