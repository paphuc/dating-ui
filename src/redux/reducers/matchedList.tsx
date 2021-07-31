import AsyncStorage from '@react-native-async-storage/async-storage'
import constants from '../constants/matchList'
import { IUser, IActionType, IStore} from '../../interfaces'

export type MatchedListProps = {
  content:IUser[] | undefined
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
  action:IActionType<MatchedListProps>
) {
  switch (action.type) {
    case constants.MATCH_USERS_LIST: {
      return { ...action.payload }
    }
    default:
      return state
  }
}
