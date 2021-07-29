import { NavigatorScreenParams } from '@react-navigation/native'
import { IUser } from '../interfaces'
export type RootStackParamList = {
  List: undefined
  NotFound: undefined
  BottomTab: NavigatorScreenParams<BottomTabParamList>
}

export type BottomTabParamList = {
  Home: NavigatorScreenParams<HomeParamList> | undefined
  Like: NavigatorScreenParams<LikeParamList> | undefined
  Inbox: undefined
  Profile: undefined
}

export type HomeParamList = {
  Home: undefined
  UserDetail: { item: IUser }
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
