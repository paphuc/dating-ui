/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
};

export type BottomTabParamList = {
  Home: NavigatorScreenParams<HomeParamList> | undefined;
  Add: undefined;
  Inbox: undefined;
  Me: undefined;
};

export type HomeParamList = {
  HomeScreen: { item: UserProps } | undefined;
};

export type AddParamList = {
  AddScreen: undefined;
};

export type InboxParamList = {
  InboxScreen: undefined;
};

export type MeParamList = {
  MeScreen: undefined;
};

export interface UserProps {
  name: string;
  email: string;
  media: string[];
  age: number;
  gender: string;
  sex: string;
  country: string;
  hobby: string[];
  about: string;
  like_id: string[];
  match_id: string[];
  lookingFor: string;
  relationship: string;
}