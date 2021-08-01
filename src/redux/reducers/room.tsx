import constants from '../constants/room'
import { IActionType, IRoom, IStore } from '../../interfaces'

const initState: IStore<IRoom> = {
  isLoading: false,
  content: [],
}
export default function matchedList(
  state: IStore<IRoom> = initState,
  action: IActionType<any>
) {
  switch (action.type) {
    case constants.ROOM_LOADING:
      return { ...state, isLoading: true }
    case constants.ROOM_LIST:
      return { ...action.payload, isLoading: false }
    default:
      return state
  }
}
