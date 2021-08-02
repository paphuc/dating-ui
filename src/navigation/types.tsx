import { NavigatorScreenParams } from '@react-navigation/native'
import { IUser, IUserInRoom, IRoom } from '../interfaces'

export type RootStackParamList = {
  List: undefined
  NotFound: undefined
  Register: undefined
  Login: undefined
  UpdateProfileScreens: { item: IUser | null } | undefined
  ChatBoxScreen:
    | {
        room: IRoom | undefined
        userID: string | undefined
        userTarget: IUserInRoom | undefined
      }
    | undefined
  SettingScreen: { item: IUser | null } | undefined
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
