import AsyncStorage from '@react-native-async-storage/async-storage'
import constants from '../constants/matchList'
import { UserProps } from '../../interfaces'

export type MatchedListProps = {
  content: UserProps[] | undefined
}

const initMatchedListState: MatchedListProps = {
  content: [],
}

export interface ActionType {
  type: string
  payload: MatchedListProps
}

export default function matchedList(
  state: Object = initMatchedListState,
  action: ActionType
) {
  switch (action.type) {
    case constants.MATCH_USERS_LIST: {
      return { ...action.payload }
    }
    default:
      return state
  }
}
