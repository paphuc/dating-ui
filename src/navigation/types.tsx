import { NavigatorScreenParams } from '@react-navigation/native'
import { UserProps } from '../interfaces'
export type RootStackParamList = {
  List: undefined
  NotFound: undefined
  Register: undefined
  Login: undefined
  UpdateProfileScreens: { item: UserProps | null} | undefined
  BottomTab: NavigatorScreenParams<BottomTabParamList>
}

export type BottomTabParamList = {
  Heart:
    | NavigatorScreenParams<HomeParamList>
    | undefined
  Matched:
    | NavigatorScreenParams<LikeTabParamList>
    | undefined
  Inbox: undefined
  Profile: undefined
}

export type HomeParamList = {
  HomeScreen: { item: UserProps } | undefined
}
export type LikeTabScreensParamList = {
  Like: undefined
  Match: undefined
}
export type LikeTabParamList = {
  LikeTabScreens:
    | NavigatorScreenParams<LikeTabScreensParamList>
    | undefined
}

export type InboxParamList = {
  InboxScreen: undefined
}

export type ProfileParamList = {
  ProfileScreen: undefined
}
