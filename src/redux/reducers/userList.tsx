import AsyncStorage from '@react-native-async-storage/async-storage'
import constants from '../constants/userList'
import { UserProps } from '../../interfaces'

export type initProps = {
  totalPages: number | undefined
  currentPage: number | undefined
  listUsers: UserProps[] | undefined
}

const initState: initProps = {
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
    case constants.USER_LIST: {
      return { ...action.payload }
    }
    case constants.USER_ERROR: {
      return { errors: action.payload }
    }
    default:
      return state
  }
}
