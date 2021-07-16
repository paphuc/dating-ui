/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NavigatorScreenParams } from "@react-navigation/native";
import { UserProps } from "../interfaces";
export type RootStackParamList = {
  List: undefined;
  NotFound: undefined;
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
};

export type BottomTabParamList = {
  Home: NavigatorScreenParams<HomeParamList> | undefined;
  Like: NavigatorScreenParams<LikeTabParamList> | undefined;
  Inbox: undefined;
  Profile: undefined;
};

export type HomeParamList = {
  HomeScreen: { item: UserProps } | undefined;
};
export type LikeTabScreensParamList = {
  Like: undefined;
  Match: undefined;
};
export type LikeTabParamList = {
  LikeTabScreens: NavigatorScreenParams<LikeTabScreensParamList> | undefined;
};

export type InboxParamList = {
  InboxScreen: undefined;
};

export type ProfileParamList = {
  ProfileScreen: undefined;
};
