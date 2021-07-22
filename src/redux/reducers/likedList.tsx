import AsyncStorage from "@react-native-async-storage/async-storage";
import constants from "../constants/likedList";
import { UserProps } from "../../interfaces";

export type likedListProps = {
  likedList: UserProps[] | undefined;
};

const initLikedListState: likedListProps = {
  likedList: [],
};

export interface ActionType {
  type: string;
  payload: likedListProps;
}

export default function authUserList(
  state: Object = initLikedListState,
  action: ActionType
) {
  switch (action.type) {
    case constants.LIKED_USERS_LIST: {
      return { ...action.payload };
    }
    default:
      return state;
  }
}