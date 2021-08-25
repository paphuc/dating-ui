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
    case constants.ROOM_UPDATE:
      const message = action.payload.data
      const content = state.content?.map((e) => {
        if (e._id === message.room_id) {
          e.last_message = message
        }
        return e
      })
      state.content = content
      return { ...state, isLoading: false }
    default:
      return state
  }
}
