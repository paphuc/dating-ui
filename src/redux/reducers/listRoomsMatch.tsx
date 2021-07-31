import AsyncStorage from '@react-native-async-storage/async-storage'
import constants from '../constants/listRoomsMatch'
import { UserProps } from '../../interfaces'

export interface UserInRoomInterface {
  _id: string
  name: string
  avatar: string
  gender: string
}
export interface RoomInterface {
  _id: string
  users: [UserInRoomInterface]
  last_message: {
    _id: string
    room_id: string
    sender_id: string
    content: string
    attachments: string
    created_at: string | Date
  } | null
}

export type roomListProps = {
  roomList: RoomInterface[] | undefined
}

const initMatchedListState: roomListProps = {
  roomList: [],
}

export interface ActionType {
  type: string
  payload: roomListProps
}

export default function matchedList(
  state: Object = initMatchedListState,
  action: ActionType
) {
  switch (action.type) {
    case constants.LIST_ROOM: {
      return { ...action.payload }
    }
    case constants.LIST_ERROR: {
      return { errors: action.payload }
    }
    default:
      return state
  }
}
