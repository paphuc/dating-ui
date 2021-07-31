import { NavigatorScreenParams } from '@react-navigation/native'
import { IUser } from '../interfaces'
import {
  RoomInterface,
  UserInRoomInterface,
} from '../redux/reducers/listRoomsMatch'

export type RootStackParamList = {
  List: undefined
  NotFound: undefined
  Register: undefined
  Login: undefined
  UpdateProfileScreens: { item: IUser | null } | undefined
  InboxScreen:
    | {
        room: RoomInterface | undefined
        userID: string | undefined
        userTarget: UserInRoomInterface | undefined
      }
    | undefined
  BottomTab: NavigatorScreenParams<BottomTabParamList>
}

export type BottomTabParamList = {
  Home: NavigatorScreenParams<HomeParamList> | undefined
  Like: NavigatorScreenParams<LikeParamList> | undefined
  Inbox: undefined
  Profile: undefined
}

export type ModelParamList = {
  UserDetail: NavigatorScreenParams<UserDetailParamList>
}

export type UserDetailParamList = {
  currentUser: IUser
  button: 'like' | 'unlike' | 'none'
}
export type HomeParamList = {
  Home: undefined
}
export type LikeParamList = {
  Like: undefined
}
export type InboxParamList = {
  InboxScreen: undefined
}

export type ProfileParamList = {
  ProfileScreen: undefined
}
