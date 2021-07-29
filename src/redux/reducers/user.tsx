import AsyncStorage from '@react-native-async-storage/async-storage'
import constants from '../constants/user'
import { IUser, IActionType } from '../../interfaces'

interface IStoreUser {
  currentPage?: number
  filter?: Object
  listUsers?: Array<IUser>
  maxItemsPerPage?: number
  totalItems?: number
  totalPages?: number
  [x: string]: any
}

const initState: IStoreUser = {
  isLoading: false,
  errors: undefined,
  message: undefined,
}

export default function authUserList(state = initState, action: IActionType) {
  switch (action.type) {
    case constants.USER_LOADING:
      return { ...state, isLoading: true }
    case constants.USER_LIST: {
      return { ...action.payload, isLoading: false }
    }
    case constants.USER_LIKE: {
      const users = state.listUsers?.filter(
        (e) => e._id != (action.payload?.target_user_id || '')
      )
      return { ...state, listUsers: users }
    }
    case constants.USER_ERROR: {
      return { errors: action.payload, isLoading: false }
    }
    default:
      return state
  }
}
