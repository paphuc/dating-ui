import AsyncStorage from '@react-native-async-storage/async-storage'
import constants from '../constants/userList'
import { IUser } from '../../interfaces'

export type initProps = {
  isLoading: boolean
  totalPages: number | undefined
  currentPage: number | undefined
  listUsers: IUser[] | undefined
}

const initState: initProps = {
  isLoading: true,
  totalPages: undefined,
  currentPage: undefined,
  listUsers: [],
}

export interface ActionType {
  type: string
  payload: initProps
}

export default function authUserList(
  state: initProps = initState,
  action: ActionType
) {
  switch (action.type) {
    case constants.USER_LOADING:
      return { ...state, isLoading: true }
    case constants.USER_LIST: {
      return { ...action.payload, isLoading: false }
    }
    case constants.USER_ERROR: {
      return { errors: action.payload, isLoading: false }
    }
    default:
      return state
  }
}
